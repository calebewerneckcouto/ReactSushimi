import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { getAllProducts } from "@/services/product";
import { Products } from "@/types/product";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";


type Tab = {
  title: string;
  value: string;
  products: Products[];
}

export const ProductsTab = async () => {

  const products = await getAllProducts();

  const tabs = [
    {
      title: 'Sushi',
      value: 'sushi',
      products: products.filter(item => item.category === 'sushi')
    },
    {
      title: 'Temaki',
      value: 'temaki',
     products: products.filter(item => item.category === 'temaki')
    },
    {
      title: 'Combinados',
      value: 'pack',
       products: products.filter(item => item.category === 'pack')
    },
    {
      title: 'Bebidas',
      value: 'beverage',
      products: products.filter(item => item.category === 'beverage')
    },
  ]



  return (
    <Tabs defaultValue="sushi" className="w-full">
      <TabsList className="flex w-full gap-2">


        {tabs.map(item => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="flex-1"
          >{item.title}
          </TabsTrigger>
        ))}





      </TabsList>

      {tabs.map(item => (
        <TabsContent
          key={item.value}
          value={item.value}
          className="mt-6"
        >
          {item.products.length>0 &&
           <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {item.products.map(product =>(
                <ProductItem  key={product.id} item={product}  />
              ))}
            </div>
            } {item.products.length === 0 && 
            <ProductEmpty/>}
          
        </TabsContent>
      ))}


    </Tabs>
  );
};
