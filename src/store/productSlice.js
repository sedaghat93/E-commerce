import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { BASE_URL } from "../utils/apiURL";

const initialState = {
    products:[],
    productsStatus: STATUS.IDLE,
    productSingle:[],
    productSingleStatus: STATUS.IDEL   
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchAsyncProducts.pending, (state, action)=>{
            state.productsStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncProducts.fulfilled, (state,action)=>{
            state.products = action.payload;
            state.productsStatus = STATUS.SUCCESSED
        })
        .addCase(fetchAsyncProducts.rejected, (state, action)=>{
            state.productsStatus = STATUS.FAILED;
        }) 

        .addCase(fetchAsyncProductSingle.pending, (state, action)=>{
            state.productSingleStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncProductSingle.fulfilled, (state,action)=>{
            state.productSingle = action.payload;
            state.productSingleStatus = STATUS.SUCCESSED;
        })
        .addCase(fetchAsyncProductSingle.rejected, (state, action)=>{
            state.productSingleStatus = STATUS.FAILED;
        })
    }
})

export const fetchAsyncProducts = createAsyncThunk ("products/fetch", async(limit)=>{
    const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
    const data = await response.json();
    return data.products;
});


export const fetchAsyncProductSingle = createAsyncThunk ("product-single/fetch", async(id)=>{
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    return data.products;
});

export const getAllProducts = (state) => state.product.products;
export const getAllProductStatus = (state) => state.product.productsStatus;

export const getProductSingle= (state) => state.product.productSingle;
export const getProductSingleStatus = (state) => state.product.productSingleStatus;


export default productSlice.reducer;