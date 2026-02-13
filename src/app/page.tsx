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
			example: "Sample A",
		},
		{
			id: "728ed523",
			amount: 125,
			status: "processing",
			email: "john@example.com",
			example: "Sample B",
		},
		{
			id: "489e1d42",
			amount: 50,
			status: "success",
			email: "alice@example.com",
			example: "Sample C",
		},
		{
			id: "629f2e31",
			amount: 200,
			status: "failed",
			email: "bob@example.com",
			example: "Sample D",
		},
		{
			id: "728ed524",
			amount: 75,
			status: "pending",
			email: "jane@example.com",
			example: "Sample E",
		},
		{
			id: "728ed525",
			amount: 150,
			status: "success",
			email: "charlie@example.com",
			example: "Sample F",
		},
		{
			id: "728ed526",
			amount: 300,
			status: "processing",
			email: "david@example.com",
			example: "Sample G",
		},
		{
			id: "728ed527",
			amount: 90,
			status: "success",
			email: "emma@example.com",
			example: "Sample H",
		},
		{
			id: "728ed528",
			amount: 175,
			status: "pending",
			email: "frank@example.com",
			example: "Sample I",
		},
		{
			id: "728ed529",
			amount: 225,
			status: "failed",
			email: "grace@example.com",
			example: "Sample J",
		},
		{
			id: "728ed530",
			amount: 80,
			status: "success",
			email: "henry@example.com",
			example: "Sample K",
		},
		{
			id: "728ed531",
			amount: 110,
			status: "processing",
			email: "ivy@example.com",
			example: "Sample L",
		},
		{
			id: "728ed532",
			amount: 95,
			status: "pending",
			email: "jack@example.com",
			example: "Sample M",
		},
		{
			id: "728ed533",
			amount: 180,
			status: "success",
			email: "kate@example.com",
			example: "Sample N",
		},
		{
			id: "728ed534",
			amount: 140,
			status: "failed",
			email: "leo@example.com",
			example: "Sample O",
		},
		{
			id: "728ed535",
			amount: 250,
			status: "processing",
			email: "mia@example.com",
			example: "Sample P",
		},
		{
			id: "728ed536",
			amount: 65,
			status: "success",
			email: "noah@example.com",
			example: "Sample Q",
		},
		{
			id: "728ed537",
			amount: 190,
			status: "pending",
			email: "olivia@example.com",
			example: "Sample R",
		},
		{
			id: "728ed538",
			amount: 130,
			status: "success",
			email: "paul@example.com",
			example: "Sample S",
		},
		{
			id: "728ed539",
			amount: 210,
			status: "failed",
			email: "quinn@example.com",
			example: "Sample T",
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
