"use client";

import React from 'react';
import {Stack, List, SidebarSimple, ArrowUpRight, Heart, EnvelopeSimple, ListDashes, Option, ClockCounterClockwise, Info, Cards} from "phosphor-react";
import Image from 'next/image';
import styles from './Sidebar.module.css';
import { useUser } from '../../hooks/useUser';
import Link from 'next/link';

const Sidebar = () => {
  const { user } = useUser();

  return (
    <div className={styles.sidebar}>
      {/* 헤더 섹션 */}
      <div className={styles.header}>
        {/* 버튼 */}
        <button className={styles.headerButton}>
          <SidebarSimple size={27} />
        </button>

        {/* 사용자 섹션 */}
        <div style={{
          width: '261px',
          height: '48px',
          backgroundColor: 'rgba(120, 120, 128, 0.12)',
          borderRadius: '11px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 8px',
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image 
              src="/user.png" 
              alt="사용자 아이콘" 
              width={28} 
              height={28} 
            />
          </div>
          <span style={{
            color: '#000000',
            fontSize: '16px',
            marginLeft: '10px'
          }}>{user?.name || '로그인이 필요합니다'}</span>
        </div>
      </div>

      {/* 메인 메뉴 */}
      <div className={styles.mainMenu}>
        <MenuItem 
          icon={<Image src="/3dlogo.png" alt="3D Logo" width={28} height={28} />}
          text="시작하기"
          hasChevron
        />
        <MenuItem 
          icon={<Heart size={22}/>}
          text="급식 정보"
        />
        <MenuItem 
          icon={<EnvelopeSimple size={22}/>}
          text="문의하기"
        />
        <MenuItem 
          icon={<List size={22}/>}
          text="게시판"
        />  
      </div>

      {/* 특별실 섹션 */}
      <SectionWithDropdown title="특별실" items={['신청', '신청현황']} />

      {/* 기타 섹션 */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>기타</span>
        </div>
        <MenuItem 
          icon={<Option size={22}/>}
          text="개인 설정"
        />
        <MenuItem 
          icon={<ClockCounterClockwise size={22}/>}
          text="업데이트 내역"
        /> 
        <MenuItem 
          icon={<Info size={22}/>}
          text="개인정보 처리방침"
        />  
      </div>
    </div>
  );
};

const MenuItem = ({ 
  icon, 
  text, 
  hasChevron 
}: { 
  icon: React.ReactNode; 
  text: string;
  hasChevron?: boolean;
}) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuIcon}>
        {icon === 'heart' ? '􀊵' : icon}
      </div>
      <span className={styles.menuText}>{text}</span>
      {hasChevron && (
        <span className={styles.chevron}><ArrowUpRight size={20}/></span>
      )}
    </div>
  );
};

const SectionWithDropdown = ({ title, items }: { title: string; items: string[] }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const getPath = (text: string) => {
    switch(text) {
      case '신청':
        return '/specialroom';
      case '신청현황':
        return '/specialroom/list';
      default:
        return '#';
    }
  };

  return (
    <div className={styles.section}>
      <div 
        className={styles.sectionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.sectionTitle}>{title}</span>
        <span className={`${styles.dropdownChevron} ${isOpen ? styles.rotate90 : ''}`}></span>
      </div>

      {isOpen && items.map((text, index) => (
        <Link href={getPath(text)} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem 
            icon={text === '신청' ? <Cards size={22}/> : <Stack size={22}/>}
            text={text}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
