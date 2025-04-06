import './detail.css';

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Noy Cohen</h2>
        <p>Lorem ipsum, dolor sit amet consecte</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shard photo</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://media.istockphoto.com/id/1034655092/photo/sunrise-at-lee-wine-rak-thai-ban-rak-thai-a-chinese-settlement-mae-hong-son-thailand.jpg?s=612x612&w=0&k=20&c=kTT4-Nwz5BZeDqMIi9qoWhDn2t2lv3Ntoo0qRDD4fR8="
                  alt=""
                />
                <span>photo_thailand_2024_223.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://media.istockphoto.com/id/1034655092/photo/sunrise-at-lee-wine-rak-thai-ban-rak-thai-a-chinese-settlement-mae-hong-son-thailand.jpg?s=612x612&w=0&k=20&c=kTT4-Nwz5BZeDqMIi9qoWhDn2t2lv3Ntoo0qRDD4fR8="
                  alt=""
                />
                <span>photo_thailand_2024_123.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://media.istockphoto.com/id/1034655092/photo/sunrise-at-lee-wine-rak-thai-ban-rak-thai-a-chinese-settlement-mae-hong-son-thailand.jpg?s=612x612&w=0&k=20&c=kTT4-Nwz5BZeDqMIi9qoWhDn2t2lv3Ntoo0qRDD4fR8="
                  alt=""
                />
                <span>photo_thailand_2024_223.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://media.istockphoto.com/id/1034655092/photo/sunrise-at-lee-wine-rak-thai-ban-rak-thai-a-chinese-settlement-mae-hong-son-thailand.jpg?s=612x612&w=0&k=20&c=kTT4-Nwz5BZeDqMIi9qoWhDn2t2lv3Ntoo0qRDD4fR8="
                  alt=""
                />
                <span>photo_thailand_2024_223.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};
export default Detail;
