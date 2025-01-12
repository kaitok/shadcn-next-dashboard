import { columns } from "./columns"
import type { Payment } from "./columns"
import { DataTable } from "./DataTable"

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "728ed523",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
	]
}

export default async function Home() {
	const data = await getData()

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={data} />
		</div>
	)
}
