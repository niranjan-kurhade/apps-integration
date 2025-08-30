import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" })
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(form)
    setForm({ name: "", email: "", feedback: "" })
  }

  return (
    <Card className="shadow-lg border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-700">Feedback Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
          <Input placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
          <Textarea placeholder="Your Feedback" name="feedback" value={form.feedback} onChange={handleChange} required />
          <Button type="submit" className="w-full">Submit</Button>
        </form>

        {submitted && (
          <div className="mt-5 bg-gray-100 p-3 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Submitted Data</h3>
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
