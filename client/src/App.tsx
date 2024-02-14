import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Catalog } from "./components/catalog/Catalog";
import { SavedTickers } from "./components/saved/SavedTickers";

function App() {
  return (
    <>
      <div className="mt-6 flex justify-center">
        <Tabs
          defaultValue="account"
          className="w-[400px] flex flex-col justify-center"
        >
          <TabsList>
            <TabsTrigger value="catalog">Catalog</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
          <TabsContent value="catalog">
            <Catalog />
          </TabsContent>
          <TabsContent value="saved">
            <SavedTickers />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default App;
