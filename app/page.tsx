import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";
import getListings, { IListingsParams } from "./action/getListings";
import getCurrentUser from "./action/getCurrenUser";
import ClientOnly from "./components/ClientOnly";
import UserLogin from "./components/UserLogin";

interface HomeProps {
  searchParams: IListingsParams;
}

export const dynamic = 'force-dynamic'

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  //กำหนดสิ่งที่จะค้นหา
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
        <div className="absolute right-1 w-full md:w-auto -2 shadow-md hover:shadow-xl bg-red-200 p-3 transition">
          {currentUser ? "" : <UserLogin />}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
