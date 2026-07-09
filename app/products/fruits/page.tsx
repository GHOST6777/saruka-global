<<<<<<< HEAD
import ProductHero from "@/app/components/ProductHero";
import ProductGrid from "@/app/components/ProductGrid";
import ProductCTA from "@/app/components/ProductCTA";
import SectionHeading from "@/app/components/SectionHeading";
import fruitsProducts from "@/app/data/fruits";

export default function FruitsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2]">
      <ProductHero
        title="Premium Fresh"
        highlight="Fruit Export"
        description="Export-quality fresh fruits sourced from trusted growing regions for global importers, wholesalers, supermarkets and hospitality buyers."
        image="/images/fruits/fruits-banner.jpg"
        backLink="/products"
        backText="Back to Products"
        badges={[
          "Fresh Fruits",
          "Export Grade",
          "Premium Quality",
          "Global Supply",
        ]}
      />

      <section id="fruits-products" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Fresh Fruits"
            title="Our Fruit Collection"
            description="Premium export-quality fruits selected for freshness, appearance, shelf life and international market requirements."
          />

          <ProductGrid products={fruitsProducts} columns={4} />
        </div>
      </section>

      <ProductCTA
        title="Looking For Bulk Fruit Export?"
        description="Send your required fruit variety, quantity, packaging preference and destination country. Our team will share availability, pricing and shipment details."
      />
    </main>
  );
=======
import Image from "next/image";
import Link from "next/link";


const fruitProducts = [

{
name:"Apples",
image:"/images/Fruits/apples.jpeg",

desc:"Export-grade Class 1 fresh apples sourced from certified orchards. Crisp, firm and professionally graded for uniform color and high Brix levels.",

details:"Varieties: Royal Gala, Fuji, Granny Smith, Red Delicious, Pink Lady | Sizes: 64–150 count per box | Quality: Firm flesh, pest-free | Packaging: 18kg/20kg cartons | Shelf Life: 3–9 Months Cold Storage"
},


{
name:"Mangoes",
image:"/images/mango.jpg",

desc:"Export-grade fresh mangoes harvested at peak maturity with excellent sweetness, rich aroma and premium texture.",

details:"Varieties: Alphonso, Kesar, Tommy Atkins, Kent, Keitt, Badami | Size: 200g–450g | Packaging: 3kg/4kg/5kg cartons | Shelf Life: 2–3 weeks Cold Chain"
}

];


export default function FruitsPage(){


return (

<main className="p-10 bg-gray-50 min-h-screen">


<div className="text-center mb-12">


<Link
href="/"
className="
inline-block
mb-6
text-green-900
font-semibold
hover:underline
"
>
← Back to Products
</Link>


<h1 className="text-5xl font-bold text-green-900">
Fruits
</h1>


<p className="mt-4 text-lg text-gray-600">
Premium Fresh Fruits Export From India
</p>


</div>



<div className="grid md:grid-cols-3 gap-10">


{fruitProducts.map((item)=>(


<div

key={item.name}

className="
bg-white
rounded-2xl
shadow-xl
overflow-hidden
hover:scale-105
transition
"

>


<Image

src={item.image}

width={500}

height={300}

alt={item.name}

className="w-full h-60 object-cover"

/>



<div className="p-6">


<h2 className="text-2xl font-bold">
{item.name}
</h2>


<p className="mt-3 text-gray-600">
{item.desc}
</p>


<p className="mt-4 text-sm text-gray-500">
{item.details}
</p>



<Link href="/quote">

<button
className="
mt-5
w-full
bg-green-900
text-white
py-3
rounded-xl
hover:bg-green-800
transition
"
>
Request Quote
</button>

</Link>


</div>


</div>


))}


</div>


</main>

)

>>>>>>> b50c02e28eb61ecd9c184fdfeaf11a434879b451
}