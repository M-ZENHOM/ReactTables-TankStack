import { DataTable } from "@/components/users/data-table";
import { columns } from "../components/users/columns";




export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}


const data = [
  {
    "id": "728ed52f",
    "name": "Terry Smitham",
    "email": "atuny0@sohu.com",
    "lastSeen": "Now"
  },
  {
    "id": "45a6b3d1",
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "lastSeen": "5 minutes ago"
  },
  {
    "id": "9c5e2787",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "lastSeen": "1 hour ago"
  },
  {
    "id": "f8d04a9e",
    "name": "Emily Brown",
    "email": "emily.brown@example.com",
    "lastSeen": "2 hours ago"
  },
  {
    "id": "61b0c358",
    "name": "Michael Wilson",
    "email": "michael.wilson@example.com",
    "lastSeen": "3 hours ago"
  },
  {
    "id": "6e894c1d",
    "name": "Sophia Martinez",
    "email": "sophia.martinez@example.com",
    "lastSeen": "4 hours ago"
  },
  {
    "id": "19cf75b2",
    "name": "David Taylor",
    "email": "david.taylor@example.com",
    "lastSeen": "5 hours ago"
  },
  {
    "id": "82c14f79",
    "name": "Olivia Anderson",
    "email": "olivia.anderson@example.com",
    "lastSeen": "6 hours ago"
  },
  {
    "id": "3f6d8a7a",
    "name": "James Wilson",
    "email": "james.wilson@example.com",
    "lastSeen": "7 hours ago"
  },
  {
    "id": "cde0a6e7",
    "name": "Ava Garcia",
    "email": "ava.garcia@example.com",
    "lastSeen": "8 hours ago"
  },
  {
    "id": "15b92f46",
    "name": "William Miller",
    "email": "william.miller@example.com",
    "lastSeen": "9 hours ago"
  },
  {
    "id": "a6e2d1c8",
    "name": "Emma Hernandez",
    "email": "emma.hernandez@example.com",
    "lastSeen": "10 hours ago"
  },
  {
    "id": "87f263d9",
    "name": "Liam Martinez",
    "email": "liam.martinez@example.com",
    "lastSeen": "11 hours ago"
  },
  {
    "id": "4a50133c",
    "name": "Mia Jackson",
    "email": "mia.jackson@example.com",
    "lastSeen": "12 hours ago"
  },
  {
    "id": "b56f7c19",
    "name": "Benjamin Adams",
    "email": "benjamin.adams@example.com",
    "lastSeen": "13 hours ago"
  },
  {
    "id": "fe41e50d",
    "name": "Charlotte Clark",
    "email": "charlotte.clark@example.com",
    "lastSeen": "14 hours ago"
  },
  {
    "id": "72a851e2",
    "name": "Daniel Wright",
    "email": "daniel.wright@example.com",
    "lastSeen": "15 hours ago"
  },
  {
    "id": "e8f4acab",
    "name": "Harper Davis",
    "email": "harper.davis@example.com",
    "lastSeen": "16 hours ago"
  },
  {
    "id": "35d49724",
    "name": "Alexander Lee",
    "email": "alexander.lee@example.com",
    "lastSeen": "17 hours ago"
  },
  {
    "id": "efc6a9d3",
    "name": "Ella Harris",
    "email": "ella.harris@example.com",
    "lastSeen": "18 hours ago"
  }
]