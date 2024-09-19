"use client"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { List } from "./components/List"
import { ListProvider } from "./contexts/listContext"
const page = () => {
  return (
    <>
    <ListProvider>
      <div className="flex ">
        <div className="mr-96 "></div>
        <div className="container flex flex-col relative h-[600px] mx-auto rounded-md mt-10 bg-gray-800" >
        <Header/>
        <List/>
        <Input/>
        </div>
        <div className="ml-96"></div>
      </div>
    </ListProvider>
    </>
  )
}
export default page
