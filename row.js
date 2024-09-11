import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, User, Tractor } from "lucide-react"



export default function Component() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Assured Contract Farming Platform</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-xl mb-4">Welcome to our Assured Contract Farming Platform</p>
          <p className="text-gray-600">Connecting farmers and buyers for sustainable agriculture</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
          {initialReviews.map((review) => (
            <div key={review.id} className="mb-4 w-full border-b pb-4 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  {review.userType === 'farmer' ? (
                    <Tractor className="w-4 h-4 mr-1" />
                  ) : (
                    <User className="w-4 h-4 mr-1" />
                  )}
                  <span className="text-sm capitalize">{review.userType}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-500">© 2023 Assured Contract Farming Platform. All rights reserved.</p>
      </CardFooter>
    </Card>
  )
}