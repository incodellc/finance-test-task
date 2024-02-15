import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Catalog } from "./Catalog";
import { SavedTickers } from "./SavedTickers";
import { HidedTickers } from "./HidedTickers";

const Dashboard = () => {
  return (
    <>
      <div className="mt-6 flex justify-center">
        <Tabs defaultValue="account" className="flex flex-col justify-center">
          <TabsList className="w-fit m-[0_auto]">
            <TabsTrigger value="catalog" autoFocus={true}>
              Catalog
            </TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="hided">Hided</TabsTrigger>
          </TabsList>
          <TabsContent value="catalog">
            <Catalog />
          </TabsContent>
          <TabsContent value="saved">
            <SavedTickers />
          </TabsContent>
          <TabsContent value="hided">
            <HidedTickers />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;
