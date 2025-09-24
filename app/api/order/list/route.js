import Address from "@/app/models/Address";
import Order from "@/app/models/Order";
import connectDB from "@/config/db";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function GET(request) {

    try {
        const { userId } = getAuth(request);

        await connectDB();

        Address.length
        Product.length

        const orders = await Order.find({ userId }).populate('address items.product');

        return NextResponse.json({ success: true, orders });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
    
}