import { NextResponse } from 'next/server';
import {getAllBranches} from "../../../../lib/actions/branches.action";


export async function GET() {
    const products = await getAllBranches();
    return NextResponse.json(products);
}
