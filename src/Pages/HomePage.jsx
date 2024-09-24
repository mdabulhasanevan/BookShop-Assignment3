
import Navbar from './../Components/Shared/Navbar';
import Bannar from './../Components/Shared/Bannar';
import ProductList from './../Components/ProductList';

export default function HomePage() {
  return (
   <div className='mx-auto w-3/4 bg-red-300'>
     <Navbar/>
     <Bannar/>
     <ProductList />
   </div>
  )
}
