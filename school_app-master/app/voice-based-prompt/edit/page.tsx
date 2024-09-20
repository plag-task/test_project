/* eslint-disable @next/next/no-img-element */
import { SVG } from "@/app/assets/icons";
import ListHeader from "@/app/components/list-header";
import React from "react";

export default function Edit() {
  return (
    <>
      <ListHeader title="Ryan Workman" ArrowBack="back" />
      <div className="bg-white rounded-[40px] mt-4 w-full p-[5px]">
        <div className="rounded-[40px] border-[#000] border p-[20px]">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[24px] text-[#000] font-[700]">
              Voice-Based Prompt Questions
            </h2>
            <div className="flex items-center gap-[25px]">
              <span className="text-[#5D5D5D] text-[24px] font-[700]">
                Story ID: MIS1000001
              </span>
              <button>
                <SVG.Edit />
              </button>
            </div>
          </div>
          <div className="p-[16px] border border-[#000] rounded-[40px]">
            <h2 className="font-[700] text-[16px] text-[#000] mb-3">
              Personality Insights
            </h2>
            <ol className="list-based">
              <li>What`s a passion of yours that you rarely talk about?</li>
              <li>Describe your perfect lazy Sunday</li>
              <li>What`s a movie you can watch over and over again?</li>
              <li>
                If you could have any superpower for a day, what would it be and
                why?
              </li>
              <li>
                What`s a personal challenge you&#39;re proud to have overcome?
              </li>
            </ol>
            <h2 className="font-[700] text-[16px] text-[#000] mb-3">
              Hobbies and Interests
            </h2>
            <ol className="list-based">
              <li>
                Do you have a hobby you think most people haven&#39;t tried but
                should?
              </li>
              <li>
                What`s the last book you read that you couldn&#39;t put down?
              </li>
              <li>
                What kind of music do you listen to when you need a mood boos
              </li>
              <li>Are you into any sports or fitness activities?</li>
              <li>What`s a skill you&#39;re currently trying to learn?</li>
            </ol>
            <h2 className="font-[700] text-[16px] text-[#000] mb-3">
              Life Experiences
            </h2>
            <ol className="list-based">
              <li>
                What&#39;s the most interesting place you&#39;ve ever visited?
              </li>
              <li>
                Share an experience that changed your perspective on life.
              </li>
              <li>
                If you could live in any era of history, when would it be and
                why
              </li>
              <li>
                What&#39;s the best piece of advice you&#39;ve ever received?
              </li>
              <li>
                {" "}
                Have you ever had a &#39;eureka&#39; moment? What was it about?
              </li>
            </ol>
            <h2 className="font-[700] text-[16px] text-[#000] mb-3">
              Dreams and Aspirations
            </h2>
            <ol className="list-based">
              <li>Where do you see yourself in five years?</li>
              <li>What&#39;s a dream you&#39;re working towards right now?</li>
              <li>
                If you could start your own charity, what would it focus on?
              </li>
              <li>What&#39;s one goal you want to achieve this year?</li>
              <li>
                If you could achieve one thing without any barriers, what would
                it be?
              </li>
            </ol>
            <h2 className="font-[700] text-[16px] text-[#000] mb-3">
              Fun and Quirky
            </h2>
            <ol className="list-based based-0">
              <li>If you were an animal, what would you be and why?</li>
              <li>What&#39;s your go-to karaoke song?</li>
              <li>Do you believe in aliens or life on other planets?</li>
              <li>What&#39;s one goal you want to achieve this year?</li>
              <li>
                If you could achieve one thing without any barriers, what would
                it be?
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
