import { Restaurant } from "../../generated/prisma"

export interface RestaurantResponse {
  id: number
  name: string
  description: string | null
  isOpen: boolean
}

export interface CreateRestaurantRequest {
  name: string
  description?: string
  isOpen?: boolean
}

export interface UpdateRestaurantRequest {
  name?: string
  description?: string
  isOpen?: boolean
}

export function toRestaurantResponse(restaurant: Restaurant): RestaurantResponse {
  return {
    id: restaurant.id,
    name: restaurant.name,
    description: restaurant.description,
    isOpen: restaurant.isOpen
  }
}