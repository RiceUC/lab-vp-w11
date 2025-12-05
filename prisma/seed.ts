import { PrismaClient } from '../generated/prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create 3 Customers
  const customer1 = await prisma.customer.create({
    data: {
      name: 'John Doe',
      phoneNumber: '+1234567890'
    }
  })

  const customer2 = await prisma.customer.create({
    data: {
      name: 'Jane Smith',
      phoneNumber: '+1234567891'
    }
  })

  const customer3 = await prisma.customer.create({
    data: {
      name: 'Bob Johnson',
      phoneNumber: '+1234567892'
    }
  })

  // Create 3 Restaurants
  const restaurant1 = await prisma.restaurant.create({
    data: {
      name: 'Pizza Palace',
      description: 'Best pizza in town',
      isOpen: true
    }
  })

  const restaurant2 = await prisma.restaurant.create({
    data: {
      name: 'Burger Haven',
      description: 'Gourmet burgers and fries',
      isOpen: true
    }
  })

  const restaurant3 = await prisma.restaurant.create({
    data: {
      name: 'Sushi Express',
      description: 'Fresh sushi daily',
      isOpen: false
    }
  })

  // Create 5 Orders
  await prisma.order.create({
    data: {
      customerId: customer1.id,
      restaurantId: restaurant1.id,
      itemCount: 2,
      estimatedArrivalTime: 2 * 10 + 10 // 30 minutes
    }
  })

  await prisma.order.create({
    data: {
      customerId: customer2.id,
      restaurantId: restaurant2.id,
      itemCount: 3,
      estimatedArrivalTime: 3 * 10 + 10 // 40 minutes
    }
  })

  await prisma.order.create({
    data: {
      customerId: customer1.id,
      restaurantId: restaurant2.id,
      itemCount: 1,
      estimatedArrivalTime: 1 * 10 + 10 // 20 minutes
    }
  })

  await prisma.order.create({
    data: {
      customerId: customer3.id,
      restaurantId: restaurant1.id,
      itemCount: 4,
      estimatedArrivalTime: 4 * 10 + 10 // 50 minutes
    }
  })

  await prisma.order.create({
    data: {
      customerId: customer2.id,
      restaurantId: restaurant3.id,
      itemCount: 2,
      estimatedArrivalTime: 2 * 10 + 10 // 30 minutes
    }
  })

  console.log('Seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })