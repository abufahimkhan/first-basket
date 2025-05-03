import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductGrid from "./products/ProductGrid";
import HomeMadeProductCards from "./products/HomeMadeProductCards";
import GroceryProductsCards from "./products/GroceryProductsCards";

export function TabsDemo() {
  return (
    <div className="flex mx-auto w-full max-w-[1400px] justify-center">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid grid-cols-3 mx-auto w-[400px]">
          <TabsTrigger value="beautyProduct">Beauty Products</TabsTrigger>
          <TabsTrigger value="grocery">Grocery</TabsTrigger>
          <TabsTrigger value="homeMade">HomeMade</TabsTrigger>
        </TabsList>
        <TabsContent value="beautyProduct">
          <div className="">
            <ProductGrid />
          </div>
        </TabsContent>
        <TabsContent value="grocery">
        <GroceryProductsCards/>
        </TabsContent>
        <TabsContent value="homeMade">
          <HomeMadeProductCards />
        </TabsContent>
      </Tabs>
    </div>
  );
}
