import { Order, Customer, Restaurant } from "../../generated/prisma"

export interface OrderResponse {
  id: number
  itemCount: number
  estimatedArrivalTime: number
  orderedAt: Date
  customer: {
    id: number
    name: string
  }
  restaurant: {
    id: number
    name: string
  }
}

export interface CreateOrderRequest {
  customerId: number
  restaurantId: number
  itemCount: number
}

export function toOrderResponse(
  order: Order & { customer: Customer; restaurant: Restaurant }
): OrderResponse {
  return {
    id: order.id,
    itemCount: order.itemCount,
    estimatedArrivalTime: order.estimatedArrivalTime,
    orderedAt: order.orderedAt,
    customer: {
      id: order.customer.id,
      name: order.customer.name
    },
    restaurant: {
      id: order.restaurant.id,
      name: order.restaurant.name
    }
  }
}