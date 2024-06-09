import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Jordan Max Aura 5",
    price: 2099000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0dd34018-208a-4bfd-9d47-665b513f7f04/jordan-max-aura-5-shoes-ZBZ4Pz.png",
  },
  {
    id: 2,
    title: "Air Jordan 9G",
    price: 3369000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/13fbb773-4379-4adf-b527-145384637af6/air-jordan-9-g-golf-shoes-nNqtwL.png",
  },
  {
    id: 3,
    title: "Air Jordan 4Oxidised Green",
    price: 3329000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32090ca9-d8ef-4943-aa41-4f23dc0777af/air-jordan-4-retro-oxidised-green-shoes.png",
  },
  {
    id: 4,
    title: "Air Jordan 4Oxidised Green",
    price: 3329000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32090ca9-d8ef-4943-aa41-4f23dc0777af/air-jordan-4-retro-oxidised-green-shoes.png",
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    // const detailProduct = data.find((product) => product.id == Number(id));
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: detailProduct,
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
