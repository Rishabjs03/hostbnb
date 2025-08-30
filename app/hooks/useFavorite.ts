import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import UseLoginModal from "./UseLoginModal";
import axios from "axios";
import toast from "react-hot-toast";



interface IuseFavorite {
    listingId: string;
    currentUser?: User | null;
}

const useFavorite = ({
    listingId,
    currentUser,
}: IuseFavorite) => {
    const router = useRouter();
    const login = UseLoginModal();

    const hasfavorited = useMemo(() => {
        const list = currentUser?.favouritesIds || []
        return list.includes(listingId)
    }, [currentUser, listingId]);

    const togglefavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (!currentUser) {
            return login.onOpen()
        }

        try {
            let request;
            if (hasfavorited) {
                request = () => axios.delete(`/api/favorties/${listingId}`)
            } else {
                request = () => axios.post(`/api/favorties/${listingId}`)
            }
            await request();
            router.refresh();
            toast.success('Success')
        } catch (error) {
            toast.error('Something Went Wrong!')
        }
    }, [currentUser, hasfavorited, listingId, login, router])
    return {
        hasfavorited, togglefavorite
    }
}
export default useFavorite;