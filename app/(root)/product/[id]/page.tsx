import { prisma } from "@/prisma/PrismaClient";
import { Container, Title } from "@/shared/components/shared";
import { GroupVariants } from "@/shared/components/shared/GroupVariants";
import { PizzaImage } from "@/shared/components/shared/ProductImage";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });
  if (!product) return notFound();

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={40} />
        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            laborum fugiat dolore eos ullam ab rem, voluptatem, nesciunt
            sapiente exercitationem assumenda nisi odio nulla magni voluptate,
            rerum autem natus perspiciatis.
          </p>
          <GroupVariants
            value={"20 см"}
            items={[
              {
                name: "Размер",
                value: "20 см",
                disabled: false,
              },
              {
                name: "Размер",
                value: "30 см",
                disabled: false,
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
