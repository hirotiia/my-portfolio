import {MainVisual} from './components/common/mv';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <MainVisual>
        <Image src='/top_mv.jpeg' alt="" layout='fill'></Image>
      </MainVisual>
      <h1>トップページ</h1>
    </div>
  )
}
