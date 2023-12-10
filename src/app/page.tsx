/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hkEEGkAsM9t
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div key="1" className="p-4 bg-[#0f1519]">
  <header className="flex items-center justify-between py-8">
    <div className="flex items-center">
      <img
        src="https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592594612171_WorldsDarkBG.png"
        alt="Team A Logo"
        className="mr-2"
      />
      <h1 className="text-lg font-bold text-white">월드 챔피언십</h1>
    </div>
      </header>
      <main className="mt-6">
      <Card className="mb-4">
  <CardHeader>
    <CardTitle className="text-white text-sm">Quarterfinals Day 1</CardTitle>
    <p className="text-white text-sm">11월 2일 오후 5시</p>
  </CardHeader>
  <CardContent className="flex justify-between items-center">
    <div className="flex items-center">
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1681501735148_NRG_PRIMARY_LIGHT.png" alt="Team A Logo" className="mr-2" />
      <p className="text-white">NRG</p>
    </div>
    <div className="flex items-center">
      <Badge className="mr-4 bg-red-500 text-white">0</Badge>
      <Badge className="bg-green-500 text-white">3</Badge>
    </div>
    <div className="flex items-center">
      <p className="text-white">WBG</p>
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1641202879910_3.png" alt="Team A Logo" className="mr-2" />
      <iframe
      width="260"
      height="130"
      src="https://www.youtube.com/embed/YAhFFlRDQQE?si=WbKbdONoy-j1i9eq"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="ml-4" // YouTube 동영상과의 간격 조절을 위해 추가
      />
    </div> 
  </CardContent>
</Card>
<Card className="mb-4">
  <CardHeader>
    <CardTitle className="text-white text-sm">Quarterfinals Day 2</CardTitle>
    <p className="text-white text-sm">11월 3일 오후 5시</p>
  </CardHeader>
  <CardContent className="flex justify-between items-center">
    <div className="flex items-center">
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1655210113163_GenG_logo_200407-05.png" alt="Team A Logo" className="mr-2" />
      <p className="text-white">Gen.G</p>
    </div>
    <div className="flex items-center">
      <Badge className="mr-4 bg-red-500 text-white">2</Badge>
      <Badge className="bg-green-500 text-white">3</Badge>
    </div>
    <div className="flex items-center">
    <p style={{ marginLeft: '24px' }}></p>
      <p className="text-white">BLG</p>
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1682322954525_Bilibili_Gaming_logo_20211.png" alt="Team A Logo" className="mr-2" />
      <iframe
      width="260"
      height="130"
      src="https://www.youtube.com/embed/Z12nNAVjUuU?si=7r3Vkt6kfWHL2skZ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="ml-4" // YouTube 동영상과의 간격 조절을 위해 추가
      />
    </div> 
  </CardContent>
</Card>
<Card className="mb-4">
  <CardHeader>
    <CardTitle className="text-white text-sm">Quarterfinals Day 3</CardTitle>
    <p className="text-white text-sm">11월 4일 오후 5시</p>
  </CardHeader>
  <CardContent className="flex justify-between items-center">
    <div className="flex items-center">
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1627457924722_29.png" alt="Team A Logo" className="mr-2" />
      <p className="text-white">JDG</p>
    </div>
    <div className="flex items-center">
      <Badge className="mr-4 bg-green-500 text-white">3</Badge>
      <Badge className="bg-red-500 text-white">1</Badge>
    </div>
    <div className="flex items-center">
    <p style={{ marginLeft: '30px' }}></p>
      <p className="text-white">kt</p>
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fkt_darkbackground.png" alt="Team A Logo" className="mr-2" />
      <iframe
      width="260"
      height="130"
      src="https://www.youtube.com/embed/P0qfynHRsh4?si=6dZFr8ycPirIcD8u"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="ml-4" // YouTube 동영상과의 간격 조절을 위해 추가
      />
    </div> 
  </CardContent>
</Card>
<Card className="mb-4">
  <CardHeader>
    <CardTitle className="text-white text-sm">Quarterfinals Day 4</CardTitle>
    <p className="text-white text-sm">11월 5일 오후 5시</p>
  </CardHeader>
  <CardContent className="flex justify-between items-center">
    <div className="flex items-center">
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819402484_lng-2021-worlds.png" alt="Team A Logo" className="mr-2" />
      <p className="text-white">LNG</p>
    </div>
    <div className="flex items-center">
      <Badge className="mr-4 bg-red-500 text-white">0</Badge>
      <Badge className="bg-green-500 text-white">3</Badge>
    </div>
    <div className="flex items-center">
    <p style={{ marginLeft: '30px' }}></p>
      <p className="text-white">T1</p>
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1698742459630_T1_Color_v2.png" alt="Team A Logo" className="mr-2" />
      <iframe
      width="260"
      height="130"
      src="https://www.youtube.com/embed/A7t2jXvH1S4?si=jBvs2srj_8pwd_G5"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="ml-4" // YouTube 동영상과의 간격 조절을 위해 추가
      />
    </div> 
  </CardContent>
</Card>
<Card className="mb-4">
  <CardHeader>
    <CardTitle className="text-white text-sm">Semifinals Day 1</CardTitle>
    <p className="text-white text-sm">11월 11일 오후 5시</p>
  </CardHeader>
  <CardContent className="flex justify-between items-center">
    <div className="flex items-center">
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1641202879910_3.png" alt="Team A Logo" className="mr-2" />
      <p className="text-white">WBG</p>
    </div>
    <div className="flex items-center">
      <Badge className="mr-4 bg-green-500 text-white">3</Badge>
      <Badge className="bg-red-500 text-white">2</Badge>
    </div>
    <div className="flex items-center">
    <p style={{ marginLeft: '24px' }}></p>
      <p className="text-white">BLG</p>
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1682322954525_Bilibili_Gaming_logo_20211.png" alt="Team A Logo" className="mr-2" />
      <iframe
      width="260"
      height="130"
      src="https://www.youtube.com/embed/E7DxdYaFlqM?si=FApsTqQdPz2CKkeD"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="ml-4" // YouTube 동영상과의 간격 조절을 위해 추가
      />
    </div> 
  </CardContent>
</Card>
<Card className="mb-4">
  <CardHeader>
    <CardTitle className="text-white text-sm">Semifinals Day 2</CardTitle>
    <p className="text-white text-sm">11월 12일 오후 5시</p>
  </CardHeader>
  <CardContent className="flex justify-between items-center">
    <div className="flex items-center">
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1698742459630_T1_Color_v2.png" alt="Team A Logo" className="mr-2" />
      <p className="text-white">T1</p>
    </div>
    <div className="flex items-center">
      <Badge className="mr-4 bg-green-500 text-white">3</Badge>
      <Badge className="bg-red-500 text-white">1</Badge>
    </div>
    <div className="flex items-center">
      <p className="text-white">JDG</p>
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1627457924722_29.png" alt="Team A Logo" className="mr-2" />
      <iframe
      width="260"
      height="130"
      src="https://www.youtube.com/embed/vHCAn2wR5eA?si=zwpAXpb-uglwfrRQ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="ml-4" // YouTube 동영상과의 간격 조절을 위해 추가
      />
    </div> 
  </CardContent>
</Card>
<Card className="mb-4">
  <CardHeader>
    <CardTitle className="text-white text-sm">Finals</CardTitle>
    <p className="text-white text-sm">11월 19일 오후 5시</p>
  </CardHeader>
  <CardContent className="flex justify-between items-center">
    <div className="flex items-center">
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1641202879910_3.png" alt="Team A Logo" className="mr-2" />
      <p className="text-white">WBG</p>
    </div>
    <div className="flex items-center">
      <Badge className="mr-4 bg-red-500 text-white">0</Badge>
      <Badge className="bg-green-500 text-white">3</Badge>
    </div>
    <div className="flex items-center">
    <p style={{ marginLeft: '30px' }}></p>
      <p className="text-white">T1</p>
      <img src="https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1698742459630_T1_Color_v2.png" alt="Team A Logo" className="mr-2" />
      <iframe
      width="260"
      height="130"
      src="https://www.youtube.com/embed/7ou0pne7EfY?si=BBTztKddmfBcm1VX"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="ml-4" // YouTube 동영상과의 간격 조절을 위해 추가
      />
    </div> 
  </CardContent>
</Card>
      </main>
    </div>
  )
}



