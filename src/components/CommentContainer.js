import React from "react";

const commentsObj = [
  {
    name: "Tarun",
    profile:
      "https://yt3.ggpht.com/LjDB55_GPnhit30Yud-IkeIUEJ9Pn_j07LCL1sqiZ0yZvdNASRC0P8XkvD7Rm_O5593bBIDk=s88-c-k-c0x00ffffff-no-rj",
    text: "lorem ipsum sit hello how are you",
    replies: [],
  },
  {
    name: "Tarun",
    profile:
      "https://yt3.ggpht.com/ytc/AIf8zZQlTntA0hDAkg27iitHXxQ6MhWFHWMDb-OAUQ=s88-c-k-c0x00ffffff-no-rj",
    text: "lorem ipsum sit hello how are you",
    replies: [
      {
        name: "Tarun",
        profile:
          "https://yt3.ggpht.com/ytc/AIf8zZQlTntA0hDAkg27iitHXxQ6MhWFHWMDb-OAUQ=s88-c-k-c0x00ffffff-no-rj",
        text: "lorem ipsum sit hello how are you",
        replies: [],
      },
      {
        name: "Tarun",
        profile:
          "https://yt3.ggpht.com/ytc/AIf8zZR575wKNFRmc-OnZt9QR5tSDJMk-YDrWfPG_mhF-RPxNbVW8gKrYtq6dG6xQhsI=s88-c-k-c0x00ffffff-no-rj",
        text: "lorem ipsum sit hello how are you",
        replies: [
          {
            name: "Tarun",
            profile:
              "https://yt3.ggpht.com/ytc/AIf8zZR575wKNFRmc-OnZt9QR5tSDJMk-YDrWfPG_mhF-RPxNbVW8gKrYtq6dG6xQhsI=s88-c-k-c0x00ffffff-no-rj",
            text: "lorem ipsum sit hello how are you",
            replies: [],
          },
          {
            name: "Tarun",
            profile:
              "https://yt3.ggpht.com/ytc/AIf8zZQlTntA0hDAkg27iitHXxQ6MhWFHWMDb-OAUQ=s88-c-k-c0x00ffffff-no-rj",
            text: "lorem ipsum sit hello how are you",
            replies: [],
          },
        ],
      },
      {
        name: "Tarun",
        profile:
          "https://yt3.ggpht.com/LjDB55_GPnhit30Yud-IkeIUEJ9Pn_j07LCL1sqiZ0yZvdNASRC0P8XkvD7Rm_O5593bBIDk=s88-c-k-c0x00ffffff-no-rj",
        text: "lorem ipsum sit hello how are you",
        replies: [],
      },
    ],
  },
  {
    name: "Tarun",
    profile:
      "https://yt3.ggpht.com/ytc/AIf8zZR575wKNFRmc-OnZt9QR5tSDJMk-YDrWfPG_mhF-RPxNbVW8gKrYtq6dG6xQhsI=s88-c-k-c0x00ffffff-no-rj",
    text: "lorem ipsum sit hello how are you",
    replies: [
      {
        name: "Tarun",
        profile:
          "https://yt3.ggpht.com/ytc/AIf8zZQlTntA0hDAkg27iitHXxQ6MhWFHWMDb-OAUQ=s88-c-k-c0x00ffffff-no-rj",
        text: "lorem ipsum sit hello how are you",
        replies: [
          {
            name: "Tarun",
            profile:
              "https://yt3.ggpht.com/ytc/AIf8zZQlTntA0hDAkg27iitHXxQ6MhWFHWMDb-OAUQ=s88-c-k-c0x00ffffff-no-rj",
            text: "lorem ipsum sit hello how are you",
            replies: [],
          },
          {
            name: "Tarun",
            profile:
              "https://yt3.ggpht.com/ytc/AIf8zZR575wKNFRmc-OnZt9QR5tSDJMk-YDrWfPG_mhF-RPxNbVW8gKrYtq6dG6xQhsI=s88-c-k-c0x00ffffff-no-rj",
            text: "lorem ipsum sit hello how are you",
            replies: [
              {
                name: "Tarun",
                profile:
                  "https://yt3.ggpht.com/ytc/AIf8zZR575wKNFRmc-OnZt9QR5tSDJMk-YDrWfPG_mhF-RPxNbVW8gKrYtq6dG6xQhsI=s88-c-k-c0x00ffffff-no-rj",
                text: "lorem ipsum sit hello how are you",
                replies: [],
              },
              {
                name: "Tarun",
                profile:
                  "https://yt3.ggpht.com/ytc/AIf8zZQlTntA0hDAkg27iitHXxQ6MhWFHWMDb-OAUQ=s88-c-k-c0x00ffffff-no-rj",
                text: "lorem ipsum sit hello how are you",
                replies: [],
              },
            ],
          },
          {
            name: "Tarun",
            profile:
              "https://yt3.ggpht.com/LjDB55_GPnhit30Yud-IkeIUEJ9Pn_j07LCL1sqiZ0yZvdNASRC0P8XkvD7Rm_O5593bBIDk=s88-c-k-c0x00ffffff-no-rj",
            text: "lorem ipsum sit hello how are you",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Tarun",
    profile:
      "https://yt3.ggpht.com/ytc/AIf8zZQlTntA0hDAkg27iitHXxQ6MhWFHWMDb-OAUQ=s88-c-k-c0x00ffffff-no-rj",
    text: "lorem ipsum sit hello how are you",
    replies: [],
  },
];

// for making the comment structure
const Comment = ({ data }) => {
  const { profile, name, text } = data;
  return (
    <>
      <div className="flex py-3">
        <img src={profile} className="rounded-full h-10" alt="profile"/>
        <div className="pl-3">
          <p className="font-medium text-sm">{name}</p>
          <p className="font-normal text-sm">{text}</p>
        </div>
      </div>
    </>
  );
};

// creating comment list and do recursing
const CommentsList = ({comments}) => {
  return (
    <>
      {comments.map((comment,index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="ml-5 pl-5 border-l border-black">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </>
  );
};

const CommentContainer = () => {
  return (
    <>
      <div className="my-6"></div>
      <CommentsList comments={commentsObj}/>
    </>
  );
};

export default CommentContainer;
