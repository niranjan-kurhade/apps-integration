import FeedbackForm from "./components/FeedbackForm"
import SlideshowApp from "./components/SlideshowApp"
import TodoApp from "./components/TodoApp"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shadcn</h1>

      <Tabs defaultValue="feedback" className="w-full max-w-2xl">
        <TabsList className="flex justify-center mb-6 bg-white shadow rounded-lg p-1">
          <TabsTrigger value="feedback" className="px-4">Feedback Form</TabsTrigger>
          <TabsTrigger value="slideshow" className="px-4">Slideshow</TabsTrigger>
          <TabsTrigger value="todo" className="px-4">Todo List</TabsTrigger>
        </TabsList>

        <TabsContent value="feedback"><FeedbackForm /></TabsContent>
        <TabsContent value="slideshow"><SlideshowApp /></TabsContent>
        <TabsContent value="todo"><TodoApp /></TabsContent>
      </Tabs>
    </div>
  )
}
