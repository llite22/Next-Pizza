export default function Home({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  );
}
