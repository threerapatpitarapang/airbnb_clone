
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import FavoritesClient from "./FavoritesClient";
import getCurrentUser from "../action/getCurrenUser";
import getFavoriteListings from "../action/getFavoriteListings";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="ไม่พบรายการโปรด"
          subtitle="ดูเหมือนว่าคุณไม่มีรายการโปรด."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;
