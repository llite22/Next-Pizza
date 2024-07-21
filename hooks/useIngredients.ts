import { Api } from "@/services/api-client"
import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"

export const useIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        async function getIngredients() {
            try {
                setLoading(true)
                const ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        getIngredients()
    }, [])

    return { ingredients, loading }
}