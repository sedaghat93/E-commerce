import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { BASE_URL } from "../utils/apiURL";

const initialState = {
    searchProuducts: [],
    searchProuductsStatus: STATUS.IDEL
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        clearSearch: (state, action) => {
            state.searchProuducts = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncSearchProduct.pending, (state, action) => {
            state.searchProuductsStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncSearchProduct.fulfilled, (state, action) => {
            state.searchProuducts = action.payload;
            state.searchProuductsStatus = STATUS.SUCCESSED;
        })
        .addCase(fetchAsyncSearchProduct.rejected, (state, action) => {
            state.searchProuductsStatus = STATUS.FAILED;
        })
    }
});

export const fetchAsyncSearchProduct = createAsyncThunk('product-search/fetch', async(searchTerm) => {
    const response = await fetch(`${BASE_URL}/products/search?q=${searchTerm}`);
    const data = await response.json();
    return data.products;
});

export const {setSearchTerm, clearSearch} = searchSlice.actions;

export const getSearchProducts = (state) => state.search.searchProuducts;
export const getSearchProductsStatus = (state) => state.search.searchProuductsStatus;

export default searchSlice.reducer;
