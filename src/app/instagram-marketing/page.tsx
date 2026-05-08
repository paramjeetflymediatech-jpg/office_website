"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Hash,
  Users,
  Clock,
  MessageSquare,
  Gift,
  Heart,
  HandHeart,
  MessageCircle,
  Image as ImageIcon
} from "lucide-react";

const strategies = [
  {
    title: "Hashtags",
    desc: "Hashtags are the prominent trend of this day and age. Without a hashtag, your Instagram caption looks as if it is missing something. So make sure you’re using the relevant hashtags.\n\nFor example, You are marketing for Navratri friendly food and in the caption section you are incorporating the hashtags like #BestNonVegFood #FishOil etc. It would hurt the reputation of your company.",
    icon: <Hash size={32} className="text-[#ff9900]" />
  },
  {
    title: "Get referred",
    desc: "Most of the followers tend to follow the people who are suggested by the people they follow. Because they have built the faith & confidence among their audience by perpetually posting the content they are willing to see. The audience always admires the particular account by liking, commenting, sharing their posts and acting according to the request made by them.\n\nFor example, A user has put on a story of his friend on which he is asking his audience to follow him. At least 10 percent of his audience will be inclined to follow him because they wanted to see what new can he bring among them.",
    icon: <Users size={32} className="text-[#ff9900]" />
  },
  {
    title: "Be Consistent",
    desc: "Consistency is something that you should not overlook at any cost because your followers always wish to see your activities on your stories and posts regularly. If you would not be able to catch their interest, they would end up either unfollowing & blocking you or post some agonizing & infuriated comments for you, which is not at all suggested as far as online reputation management is concerned.",
    icon: <Clock size={32} className="text-[#ff9900]" />
  },
  {
    title: "Hashtags in the Comment Section",
    desc: "Not all Instagram marketing companies give due importance to this factor. But being an experienced and reputed Instagram company, we make use of all the available techniques and tactics. So we aim at making your content more visible. For this reason, we incorporate the hashtags in the comment section as well. So it will facilitate you to add some hashtags in your caption and others in the comment section. It will look more appealing as compared to the traditional approach of adding all the hashtags in one place.",
    icon: <Hash size={32} className="text-[#ff9900]" />
  },
  {
    title: "Run Instagram Contests",
    desc: "Organizing Instagram contests will help you to drive the traffic of potential followers. Besides, if they’re interested in your theme they will surely refer this to their friends and relatives. It is customarily observed that many people also put on their stories by tagging the particular contest organizer. And within no time the traffic was routed to your account. You could build faith among your audience by facilitating the winner of the contest with exciting gift hampers and vouchers.",
    icon: <MessageSquare size={32} className="text-[#ff9900]" />
  },
  {
    title: "Make your followers like",
    desc: "Your caption and content should be so amazing that the people once at seeing feels to double dab for liking the post. But if you have not gotten the response which you expected then you should ask them by using humble words, like ‘Please’ to like your content.",
    icon: <Heart size={32} className="text-[#ff9900]" />
  },
  {
    title: "Build a healthy relationship",
    desc: "If you build a healthy relationship with the accounts with maximum followers, the flowers will also follow you because they must think if they would not follow you then they would miss the content of their favourites. So it is just a psychological strategy. For example, We all have noticed the growth of followers of Rohanpreet Singh, husband of famous singer Neha Kakkar. This growth is particularly carried out by the followers of Neha Kakkar because they do not want to miss any of the photo and story of her which would surely be posted by her husband.",
    icon: <HandHeart size={32} className="text-[#ff9900]" />
  },
  {
    title: "Comment on posts of other accounts",
    desc: "It is a shared experience by our potential user who said that once he experimented by commenting on the posts of the other accounts and he encountered 20% traffic on Instagram. And yes, it is relevant to mention here that your comment should be relevant. It should be meeting the standards of Instagram. So it’s the work of the Instagram companies who know which comment is to be done in which way.",
    icon: <MessageCircle size={32} className="text-[#ff9900]" />
  },
  {
    title: "Make use of the Instagram stories",
    desc: "Instagram stories are quintessentially indispensable from the digital marketing point of view. Because the users can maintain better interaction with the follower with the use of stories.\n\nUse both images & Video content\nBoth the image and video content is necessary to be posted on Instagram otherwise the user may get bored with the monotonous behavior of the account.",
    icon: <ImageIcon size={32} className="text-[#ff9900]" />
  }
];

export default function InstagramMarketingPage() {
  return (
    <main className="min-h-screen bg-[#EFEFEF]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[600px] overflow-hidden">
              <img 
                loading="lazy" 
                decoding="async" 
                width="1200" 
                height="1000" 
                src="https://flymediatech.com/wp-content/uploads/2024/03/insta-1.png" 
                className="w-full h-auto object-cover" 
                alt="Best Influencer Marketing Company in India" 
                srcSet="https://flymediatech.com/wp-content/uploads/2024/03/insta-1.png 1200w, https://flymediatech.com/wp-content/uploads/2024/03/insta-1-300x250.png 300w, https://flymediatech.com/wp-content/uploads/2024/03/insta-1-1024x853.png 1024w, https://flymediatech.com/wp-content/uploads/2024/03/insta-1-768x640.png 768w"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-black  leading-tight">
              An Instagram Marketing Company in Ludhiana
            </h1>
            
            <div className="text-gray-600 text-[15px] sm:text-base leading-relaxed space-y-4">
              <p>
                Instagram has gained significant popularity after Facebook. Since the last decade, it has emerged as the best platform for marketing opportunities. It has been found out that the business who are taking the help of the Instagram marketing company in Ludhiana to maintain the online presence. Online presence is quintessentially important as far as the marketing aspect is concerned. You should choose the best Instagram marketing company because of the following reasons:
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Optimization of the account Section */}
      <section className="py-16 px-4 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Optimization of the account
            </h2>
            
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
              The best Instagram accounts always have the following peculiarly maintained things that make their profile unique from the others:
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight pt-4">
              Bio
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
              Bio is of utmost significance for the profile on Instagram. Because from the bio itself the user can envision what the account is all about and what nature he would be getting to experience. A good bio is always accompanied by relevant emojis.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight pt-4">
              Profile Picture
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
              Your profile picture should not only be only eye-catchy, but it should be memorable as well. Because in the absence of a good profile picture, the user may not feel interested in following you, no matter how interesting your content is.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[600px] overflow-hidden">
              <img 
                loading="lazy" 
                decoding="async" 
                width="1200" 
                height="1000" 
                src="https://flymediatech.com/wp-content/uploads/2024/03/insta02.png" 
                className="w-full h-auto object-cover" 
                alt="Best Influencer Marketing Company in Punjab, India" 
                srcSet="https://flymediatech.com/wp-content/uploads/2024/03/insta02.png 1200w, https://flymediatech.com/wp-content/uploads/2024/03/insta02-300x250.png 300w, https://flymediatech.com/wp-content/uploads/2024/03/insta02-1024x853.png 1024w, https://flymediatech.com/wp-content/uploads/2024/03/insta02-768x640.png 768w"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Follow relevant accounts Section */}
      <section className="py-16 px-4 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[600px] overflow-hidden">
              <img 
                loading="lazy" 
                decoding="async" 
                width="1200" 
                height="1000" 
                src="https://flymediatech.com/wp-content/uploads/2024/03/relvtfol.png" 
                className="w-full h-auto object-cover" 
                alt="Best Influencer Marketing Company in Punjab" 
                srcSet="https://flymediatech.com/wp-content/uploads/2024/03/relvtfol.png 1200w, https://flymediatech.com/wp-content/uploads/2024/03/relvtfol-300x250.png 300w, https://flymediatech.com/wp-content/uploads/2024/03/relvtfol-1024x853.png 1024w, https://flymediatech.com/wp-content/uploads/2024/03/relvtfol-768x640.png 768w"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Follow relevant accounts
            </h2>
            
            <div className="text-gray-600 text-[15px] sm:text-base leading-relaxed space-y-4">
              <p>
                Relevancy is something that the user notices the most. So you should take care of this aspect that your account should follow the people who are relevant to your industry.
              </p>
              <p>
                <b>For example</b>, Your company is recognized for making environment-friendly products but in your following list, you are found following the owners of plastic bag manufacturing units.<br/>The users consider this as a hypocrite behaviour which they do not want to see and ultimately they end up unfollowing and even blocking the user.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-16 px-4 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-start p-8"
              >
                <div className="mb-6 bg-orange-50 w-14 h-14 rounded-full flex items-center justify-center">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-wrap">
                  {strategy.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Text Section */}
      <section className="py-10 px-4 bg-[#EFEFEF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-xl font-bold text-black leading-relaxed">
            So if you are looking for effective Instagram marketing strategies then please contact us. We shall be very happy to be given a chance to escalate your followers.
          </h2>
        </div>
      </section>
    </main>
  );
}
