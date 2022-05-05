import React, { FC } from "react";

type CData = { userName: string; cdate: string };
type CommentData = {
  commData?: CData[];
};

const FindNoOfDays = (date: string) => {
  const olddate = new Date(date);
  const cdate = new Date();
  const Difference_In_Time = cdate.getTime() - olddate.getTime();

  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Math.round(Difference_In_Days);
};

const CommentsTab: React.FC<CommentData> = ({ commData }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="flex justify-between">
        <div className="text-xl leading-8 font-semibold text-gray-800">
          {commData?.length} Comments
        </div>
      </div>
      <div>
        {commData?.map((comment, id) => {
          return (
            <div key={id} className="bg-white p-4 shadow rounded-md items-center mt-2">
              <div className="ml-2 flex">
                <div className="text-sm leading-5 font-semibold text-gray-600">
                  {comment.userName}
                </div>
                <div className="text-sm leading-5 ml-3 font-normal text-gray-400">
                  {FindNoOfDays(comment.cdate)} day ago
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentsTab;
