import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { getAllProducts } from "@/services/product";

export const ProductsTab = async() => {

const products = await getAllProducts();





  return (
    <Tabs defaultValue="tab1" className="w-full">
      <TabsList className="flex w-full gap-2">
        <TabsTrigger className="flex-1" value="tab1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="tab2">
          Tab 2
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1" className="mt-6">
        Conteúdo da Tab 1
      </TabsContent>
      <TabsContent value="tab2" className="mt-6">
        Conteúdo da Tab 2
      </TabsContent>
    </Tabs>
  );
};
