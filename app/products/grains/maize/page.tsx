import Image from "next/image";
import Link from "next/link";


const maizeProducts = [

{
name:"Yellow Maize",
image:"/images/yellow-maize.jpg",
desc:"Premium-quality Yellow Maize sourced from India's leading agricultural regions. Known for high nutritional value, uniform grains and excellent energy content. Used in animal feed, poultry feed, starch, ethanol and food industries.",
details:"Origin: Karnataka, Andhra Pradesh, Maharashtra, Bihar | Purity: 98–99% Minimum | Moisture: Max 14% | Packaging: 25kg, 50kg PP Bags or Bulk | Shelf Life: 12 Months"
},


{
name:"White Maize",
image:"/images/white-maize.jpg",
desc:"Food-grade white maize with uniform grain size, excellent milling properties and high nutritional value. Suitable for flour, snacks, cereals and food processing.",
details:"Origin: Madhya Pradesh, Rajasthan, Uttar Pradesh | Purity: 98–99% Minimum | Moisture: Max 14% | Packaging: 25kg, 50kg PP Bags | Shelf Life: 12 Months"
},


{
name:"Sweet Corn",
image:"/images/sweet-corn.jpg",
desc:"High-quality sweet corn with natural sweetness, tender kernels and rich nutrition. Suitable for fresh consumption, canning, freezing and food industries.",
details:"Origin: Karnataka, Maharashtra, Andhra Pradesh | Packaging: 5kg, 10kg Cartons | Shelf Life: Fresh: 10–15 Days | Frozen: 12 Months"
},


{
name:"Baby Corn",
image:"/images/baby-corn.jpg",
desc:"Fresh baby corn harvested early for tenderness, crisp texture and superior taste. Used in salads, stir-fries, canned products and food processing.",
details:"Origin: Karnataka, Haryana, Uttar Pradesh | Packaging: 2kg, 5kg Cartons | Shelf Life: 7–10 Days"
},


{
name:"Popcorn Maize",
image:"/images/popcorn.jpg",
desc:"Premium popcorn maize with excellent popping expansion, low moisture and high kernel quality. Suitable for snack manufacturers and retailers.",
details:"Origin: Karnataka, Maharashtra, Madhya Pradesh | Purity: 99% Minimum | Packaging: 25kg, 50kg Bags | Shelf Life: 12 Months"
},


{
name:"Broken Maize",
image:"/images/broken-maize.jpg",
desc:"Premium broken maize processed from quality corn grains. Used in poultry feed, livestock feed, starch industries and food processing.",
details:"Origin: India | Purity: 98% Minimum | Packaging: 25kg, 50kg Bags or Bulk | Shelf Life: 12 Months"
}

];



export default function MaizePage(){


return (

<main className="p-10 bg-gray-50 min-h-screen">


<div className="text-center mb-12">


<Link
href="/products/grains"
className="
inline-block
mb-6
text-green-900
font-semibold
hover:underline
"
>
← Back to Grains
</Link>


<h1 className="text-5xl font-bold text-green-900">
Maize Products
</h1>


<p className="mt-4 text-lg text-gray-600">
Premium Indian Maize Export Solutions
</p>


</div>



<div className="grid md:grid-cols-3 gap-10">


{maizeProducts.map((item)=>(


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

}