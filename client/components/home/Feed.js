import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: 'batoul',
        userName: '0xFc489b3056cbb63ed599dce8cB33fAa9db76A8ff',
        avatar: '/IMG_2194.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2023-02-16T13:00:00.000Z', //This is how sanity stores timestamps
    },
    {
        displayName: 'batoul',
        userName: '0xFc489b3056cbb63ed599dce8cB33fAa9db76A8ff',
        avatar: '/IMG_2194.jpg',
        text: 'I/m making a twitter clone today',
        isProfileImageNft: false,
        timestamp: '2023-02-16T13:00:00.000Z', //This is how sanity stores timestamps
    },
    {
        displayName: 'batoul',
        userName: '0xFc489b3056cbb63ed599dce8cB33fAa9db76A8ff',
        avatar: '/IMG_2194.jpg',
        text: 'miladys are losers',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', //This is how sanity stores timestamps
    },
    {
        displayName: 'batoul',
        userName: '0xFc489b3056cbb63ed599dce8cB33fAa9db76A8ff',
        avatar: '/IMG_2194.jpg',
        text: 'gn',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z', //This is how sanity stores timestamps
    },
]


function Feed() {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {tweets.map((tweet,index) => (
                <Post 
                    key={index}
                    displayName={tweet.displayName}
                    userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))}
        </div>
    )
}

export default Feed;