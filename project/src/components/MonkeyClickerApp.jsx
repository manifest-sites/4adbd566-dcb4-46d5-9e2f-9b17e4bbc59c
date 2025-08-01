import { useState } from 'react'
import { Button, Card, Typography } from 'antd'

const { Title, Text } = Typography

function MonkeyClickerApp() {
  const [clickCount, setClickCount] = useState(0)

  const handleMonkeyClick = () => {
    setClickCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
      <Card className="text-center shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
        <div className="p-8">
          <Title level={1} className="mb-8 text-gray-800">
            🐵 Monkey Clicker! 🐵
          </Title>
          
          <div className="mb-8">
            <Button
              type="ghost"
              size="large"
              className="monkey-button border-0 bg-transparent hover:scale-110 transition-transform duration-200 p-0"
              onClick={handleMonkeyClick}
            >
              <div className="text-9xl hover:animate-bounce cursor-pointer select-none">
                🐵
              </div>
            </Button>
          </div>
          
          <div className="space-y-4">
            <Title level={2} className="text-gray-700">
              Clicks: {clickCount}
            </Title>
            
            <Text className="text-gray-600 text-lg block">
              Click the monkey to increase your count!
            </Text>
            
            {clickCount > 0 && (
              <div className="mt-6">
                {clickCount === 1 && (
                  <Text className="text-green-600 font-semibold">Great start! 🎉</Text>
                )}
                {clickCount >= 10 && clickCount < 50 && (
                  <Text className="text-blue-600 font-semibold">Getting the hang of it! 🚀</Text>
                )}
                {clickCount >= 50 && clickCount < 100 && (
                  <Text className="text-purple-600 font-semibold">Monkey clicking master! 🏆</Text>
                )}
                {clickCount >= 100 && (
                  <Text className="text-red-600 font-bold">LEGENDARY CLICKER! 👑</Text>
                )}
              </div>
            )}
            
            {clickCount > 0 && (
              <Button 
                type="primary" 
                ghost 
                onClick={() => setClickCount(0)}
                className="mt-4 border-gray-400 text-gray-600 hover:border-red-500 hover:text-red-500"
              >
                Reset Counter
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default MonkeyClickerApp