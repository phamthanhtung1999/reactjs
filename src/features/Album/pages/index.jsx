import React from 'react';
// import PropTypes from "prop-types";
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Top 100 bài hát nhạc trẻ hay nhất',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/f/b/f/bfbfbdb38f8ad75d575228b2d72e4246.jpg',
    },
    {
      id: 2,
      name: 'Top 100 nhạc rap Viet Nam hay nhất',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/8/8/e/188e45098127c7f75cc4b715bf01bcd6.jpg',
    },
    {
      id: 3,
      name: 'Top 100 Pop Âu Mỹ hay nhất',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/9/f/6/e9f6c74d1651a3dcf0be456822f1eefd.jpg',
    },
    {
      id: 4,
      name: 'Top 100 nhạc trữ tình hay nhất',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/1/0/f/610f6b9b6d694034c23e4ef48e4ad7b8.jpg',
    },
    {
      id: 5,
      name: 'Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg',
    },
  ];
  return (
    <div>
      <h3>Có thể bạn sẽ thích đấy</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
