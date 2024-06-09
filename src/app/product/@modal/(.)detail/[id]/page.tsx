import Modal from "@/app/components/core/Modal";
import { getData } from "@/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    <Modal>
      <img
        alt={product.data.image}
        src={product.data.image}
        className="rounded-t-lg object-cover h-96 w-full"
      />
      <div className="bg-white p-4 px-6">
        <h3>{product.data.title}</h3>
        <p>{product.data.price}</p>
      </div>
    </Modal>
  );
}
