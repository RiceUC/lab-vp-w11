import { Customer } from "../../generated/prisma"

export interface CustomerResponse {
  id: number
  name: string
  phoneNumber: string
}

export interface CreateCustomerRequest {
  name: string
  phoneNumber: string
}

export interface UpdateCustomerRequest {
  name?: string
  phoneNumber?: string
}

export function toCustomerResponse(customer: Customer): CustomerResponse {
  return {
    id: customer.id,
    name: customer.name,
    phoneNumber: customer.phoneNumber
  }
}