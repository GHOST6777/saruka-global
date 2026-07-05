import Image from "next/image";
import Link from "next/link";


const wheatProducts = [

{
name:"Sharbati Wheat",
image:"/images/sharbati.jpg",
desc:"Premium-quality Sharbati Wheat known for golden appearance, superior grain quality, high protein content and naturally sweet taste. Produces soft and fluffy chapatis with excellent texture.",
details:"Origin: Madhya Pradesh, India | Protein: 11–13% | Moisture: Max 12% | Packaging: 25kg, 50kg PP Bags | Shelf Life: 12–24 Months"
},


{
name:"Lokwan Wheat",
image:"/images/lokwan.jpg",
desc:"Premium milling-grade wheat with excellent flour yield, balanced protein content and superior baking performance. Suitable for chapati flour, bakery and food processing.",
details:"Origin: Maharashtra, Madhya Pradesh, Gujarat | Protein: 10–12% | Moisture: Max 12% | Packaging: 25kg, 50kg PP Bags | Shelf Life: 12–24 Months"
},


{
name:"Durum Wheat",
image:"/images/durum.jpg",
desc:"High-quality Durum Wheat with hard amber kernels, strong gluten quality and excellent milling characteristics. Ideal for pasta, macaroni, semolina and food industries.",
details:"Origin: Madhya Pradesh, Rajasthan, Gujarat | Protein: 12–14% | Moisture: Max 12% | Packaging: 25kg, 50kg PP Bags | Shelf Life: 12–24 Months"
}

];


export default function WheatPage(){

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
Wheat Products
</h1>


<p className="mt-4 text-lg text-gray-600">
Premium Indian Wheat For Global Markets
</p>


</div>



<div className="grid md:grid-cols-3 gap-10">


{wheatProducts.map((item)=>(


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