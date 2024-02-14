import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Catalog } from "./components/catalog/Catalog";
import { SavedTickers } from "./components/saved/SavedTickers";

function App() {
  return (
    <>
      <div className="mt-6 flex justify-center">
        <Tabs defaultValue="account" className="flex flex-col justify-center">
          <TabsList className="w-fit m-[0_auto]">
            <TabsTrigger value="catalog" autoFocus={true}>
              Catalog
            </TabsTrigger>
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
