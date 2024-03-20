// src/components/search/SearchResultList.tsx
import React from 'react';
import { List } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from '../../styles/search/SearchResultList.module.css';

export interface SearchResult {
  precedentId: number;
  caseName: string;
  caseContent: string;
  courtName?: string;
  instance?: string;
  judgmentDate?: string;
}

interface SearchResultListProps {
  searchResults: SearchResult[];
}

const SearchResultList: React.FC<SearchResultListProps> = ({ searchResults }) => {
  const navigate = useNavigate();

  // list 아이템 클릭 시 호출되는 함수
  const handleItemClick = (precedentId: number) => {
    navigate(`/laws/${precedentId}`);
  };


  return (
    <List
      className={style.searchResultList}
      itemLayout="vertical"
      dataSource={searchResults}
      renderItem={item => (
        <List.Item 
          key={item.precedentId}
          className={style.item}
          onClick={() => handleItemClick(item.precedentId)}
        > 
          <List.Item.Meta
            title={<span className={style.itemTitle} onClick={() => handleItemClick(item.precedentId)}>{item.caseName} </span>}
            description={
              <div>
                <p className={style.itemContent}>{item.caseContent}</p>
                <div className={style.itemMeta}>
                  {item.courtName && <span className={style.metaItem}>{item.courtName}</span>}
                  {item.instance && <span className={style.metaItem}>{item.instance}</span>}
                  {item.judgmentDate && <span className={style.metaItem}>{item.judgmentDate}</span>}
                </div>
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default SearchResultList;