import React from "react"
import styles from "../../styles/Home.module.css"



function LeftNavbar(){
    return(
        <div className={styles.navcontainer}>
            <div className={styles.logo}>
            <svg className = "name_icon" width="50" height="50" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="14.91" cy="14.12" rx="14.91" ry="14.12" fill="#3772FF"/>
                        <path d="M19.4749 20H17.3749L12.6199 12.815V20H10.5199V9.515H12.6199L17.3749 16.715V9.515H19.4749V20Z" fill="#FEFEFE"/>
                       </svg>    Name
            </div>
            
            <div className={styles.wrapper}>
                <ul>
                    <li>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.6288 1.30083H16.5186C17.7142 1.30083 18.6841 2.22725 18.6841 3.37013V6.1295C18.6841 7.27151 17.7142 8.19881 16.5186 8.19881H13.6288C12.4323 8.19881 11.4624 7.27151 11.4624 6.1295V3.37013C11.4624 2.22725 12.4323 1.30083 13.6288 1.30083Z" stroke="#808191" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.15811 1.30083H6.04695C7.24346 1.30083 8.21336 2.22725 8.21336 3.37013V6.1295C8.21336 7.27151 7.24346 8.19881 6.04695 8.19881H3.15811C1.9616 8.19881 0.991699 7.27151 0.991699 6.1295V3.37013C0.991699 2.22725 1.9616 1.30083 3.15811 1.30083Z" stroke="#808191" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.15817 11.1573H6.04701C7.24352 11.1573 8.21342 12.0838 8.21342 13.2275V15.986C8.21342 17.1289 7.24352 18.0553 6.04701 18.0553H3.15817C1.96166 18.0553 0.99176 17.1289 0.99176 15.986V13.2275C0.99176 12.0838 1.96166 11.1573 3.15817 11.1573Z" stroke="#808191" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.6291 11.1573H16.5188C17.7144 11.1573 18.6843 12.0838 18.6843 13.2275V15.986C18.6843 17.1289 17.7144 18.0553 16.5188 18.0553H13.6291C12.4326 18.0553 11.4627 17.1289 11.4627 15.986V13.2275C11.4627 12.0838 12.4326 11.1573 13.6291 11.1573Z" stroke="#808191" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        </svg> 
                        <a href="#">     Home</a>
                        
                    </li>
                    <li>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.3634 8.81891V15.3152" stroke="#808191" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M11.0294 5.70985V15.3146" stroke="#808191" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M15.6202 12.2516V15.315" stroke="#808191" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.6774 1.1138H6.30598C3.03932 1.1138 0.991699 3.30324 0.991699 6.4027V14.764C0.991699 17.8635 3.02979 20.0529 6.30598 20.0529H15.6774C18.9536 20.0529 20.9917 17.8635 20.9917 14.764V6.4027C20.9917 3.30324 18.9536 1.1138 15.6774 1.1138Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        </svg>
                        <a href="#">     Section  1</a>
                        
                        
                    </li>
                    <li>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.04169 10.3486V10.8486H4.54169H5.84171C6.00159 10.8486 6.09171 10.972 6.09171 11.0588V16.6648C6.09171 16.7516 6.00159 16.875 5.84171 16.875H4.54169H4.04169V17.375V18.6723C4.04169 18.7591 3.95157 18.8826 3.79169 18.8826C3.6318 18.8826 3.54169 18.7591 3.54169 18.6723V17.375V16.875H3.04169H1.7417C1.58182 16.875 1.4917 16.7516 1.4917 16.6648V11.0588C1.4917 10.972 1.58182 10.8486 1.7417 10.8486H3.04169H3.54169V10.3486V7.85809C3.54169 7.77131 3.6318 7.64787 3.79169 7.64787C3.95157 7.64787 4.04169 7.77131 4.04169 7.85809V10.3486Z" stroke="#808191"/>
                        <path d="M11.262 4.90246V5.40246H11.762H13.012C13.1718 5.40246 13.262 5.5259 13.262 5.61268V14.7224C13.262 14.8092 13.1718 14.9326 13.012 14.9326H11.772H11.272V15.4326V16.73C11.272 16.8167 11.1819 16.9402 11.022 16.9402C10.8621 16.9402 10.772 16.8167 10.772 16.73V15.4326V14.9326H10.272H9.02197C8.86209 14.9326 8.77197 14.8092 8.77197 14.7224V5.61268C8.77197 5.5259 8.86209 5.40246 9.02197 5.40246H10.262H10.762V4.90246V1.98584C10.762 1.89905 10.8521 1.77562 11.012 1.77562C11.1718 1.77562 11.262 1.89905 11.262 1.98584V4.90246Z" stroke="#808191"/>
                        <path d="M18.4421 2.34674V2.84674H18.9421H20.2421C20.402 2.84674 20.4921 2.97017 20.4921 3.05695V11.9962C20.4921 12.083 20.402 12.2064 20.2421 12.2064H18.9421H18.4421V12.7064V14.7234C18.4421 14.8102 18.352 14.9337 18.1921 14.9337C18.0322 14.9337 17.9421 14.8102 17.9421 14.7234V12.7064V12.2064H17.4421H16.1421C15.9822 12.2064 15.8921 12.083 15.8921 11.9962V3.05695C15.8921 2.97017 15.9822 2.84674 16.1421 2.84674H17.4421H17.9421V2.34674V1.15358C17.9421 1.06679 18.0322 0.943359 18.1921 0.943359C18.352 0.943359 18.4421 1.06679 18.4421 1.15358V2.34674Z" stroke="#808191"/>
                        </svg>  
                        <a href="#">     Section  2</a></li>
                    <li>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.4585 13.5656L8.45163 9.8818L11.8658 12.4215L14.7949 8.84166" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <ellipse cx="18.2088" cy="3.54493" rx="1.9222" ry="1.82024" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M13.1382 2.52185H5.87042C2.85898 2.52185 0.991699 4.54144 0.991699 7.39314V15.0468C0.991699 17.8985 2.82236 19.9094 5.87042 19.9094H14.4745C17.486 19.9094 19.3533 17.8985 19.3533 15.0468V8.38127" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        </svg>    
                        
                        <a href="#">  Section  3</a></li>
                    <li>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4882 15.7327V5.40222H11.1871V15.7327H10.4882ZM12.6743 8.60627C12.6289 8.22426 12.4414 7.92834 12.1118 7.7185C11.7823 7.50597 11.3675 7.39971 10.8675 7.39971C10.5095 7.39971 10.1999 7.45351 9.93852 7.56112C9.67715 7.66604 9.47403 7.81131 9.32914 7.99694C9.1871 8.17987 9.11607 8.38837 9.11607 8.62242C9.11607 8.8188 9.16437 8.98828 9.26096 9.13087C9.36039 9.27345 9.48965 9.39316 9.64874 9.49001C9.81068 9.58417 9.98397 9.66353 10.1686 9.7281C10.3533 9.78997 10.5308 9.84108 10.7013 9.88144L11.5536 10.0913C11.832 10.1558 12.1175 10.2433 12.4101 10.3536C12.7027 10.4639 12.974 10.6091 13.224 10.7894C13.474 10.9696 13.6757 11.1929 13.8291 11.4593C13.9854 11.7256 14.0635 12.0444 14.0635 12.4156C14.0635 12.8837 13.9357 13.2994 13.68 13.6625C13.4272 14.0257 13.0593 14.3122 12.5763 14.5221C12.0962 14.7319 11.5152 14.8368 10.8334 14.8368C10.18 14.8368 9.61465 14.7386 9.13738 14.5422C8.66011 14.3459 8.28653 14.0674 8.01664 13.7069C7.74676 13.3438 7.59761 12.9133 7.5692 12.4156H8.89022C8.91579 12.7142 9.01806 12.9631 9.19704 13.1622C9.37886 13.3585 9.61039 13.5052 9.89164 13.602C10.1757 13.6962 10.4868 13.7432 10.8249 13.7432C11.197 13.7432 11.528 13.6881 11.8178 13.5778C12.1104 13.4648 12.3405 13.3088 12.5081 13.1097C12.6757 12.9079 12.7595 12.6725 12.7595 12.4035C12.7595 12.1587 12.6857 11.9583 12.5379 11.8023C12.3931 11.6462 12.1956 11.5171 11.9456 11.4149C11.6985 11.3126 11.4186 11.2225 11.1061 11.1445L10.0749 10.8782C9.37602 10.6979 8.82204 10.4329 8.41295 10.0832C8.0067 9.73348 7.80357 9.27076 7.80357 8.69505C7.80357 8.21888 7.93994 7.80324 8.21266 7.44813C8.48539 7.09302 8.85471 6.81728 9.32062 6.62089C9.78653 6.42182 10.3121 6.32228 10.8973 6.32228C11.4882 6.32228 12.0095 6.42047 12.4612 6.61686C12.9158 6.81324 13.2737 7.08361 13.5351 7.42796C13.7965 7.76962 13.9328 8.16239 13.9442 8.60627H12.6743Z" fill="#808191"/>
                        <path d="M4.77794 4.491C5.06951 4.491 5.36054 4.48632 5.65156 4.49204C6.03374 4.49931 6.2715 4.71711 6.2682 5.04665C6.26491 5.37048 6.01726 5.59191 5.63893 5.59399C4.88831 5.59763 4.13768 5.59815 3.38706 5.59399C3.00488 5.59191 2.76273 5.37828 2.75723 5.01547C2.74625 4.28776 2.74625 3.56005 2.75833 2.83235C2.76382 2.49553 3.023 2.2663 3.34862 2.26838C3.67369 2.27046 3.91749 2.50124 3.93287 2.83911C3.94385 3.07873 3.93506 3.31991 3.93506 3.62555C4.05916 3.51743 4.13494 3.4483 4.21346 3.38281C7.08582 0.991773 10.3876 0.250034 14.0177 1.35874C17.6264 2.46122 19.8536 4.87616 20.703 8.38058C21.1511 10.2295 20.9441 12.0456 20.211 13.8087C20.0749 14.1362 19.8442 14.2901 19.5576 14.2542C19.1513 14.2033 18.9404 13.8436 19.103 13.4527C19.4566 12.6002 19.6696 11.7213 19.7328 10.8054C20.0018 6.88359 17.2283 3.22843 13.1869 2.27565C10.0927 1.54639 7.3395 2.22887 4.95639 4.2389C4.88227 4.30127 4.79221 4.3465 4.7093 4.40003C4.73236 4.43018 4.75487 4.46033 4.77794 4.491Z" fill="#808191"/>
                        <path d="M17.1527 16.1366C16.883 16.1366 16.6129 16.1387 16.3433 16.1361C15.9221 16.1319 15.6574 15.9209 15.6509 15.5877C15.6443 15.243 15.9133 15.0201 16.3488 15.0185C17.0538 15.0159 17.7583 15.0154 18.4634 15.0185C18.9466 15.0206 19.1651 15.2306 19.1657 15.688C19.1668 16.3637 19.1679 17.0395 19.1651 17.7152C19.164 18.1092 18.9323 18.3498 18.5671 18.3441C18.213 18.3384 18.0038 18.1092 17.9988 17.7173C17.9961 17.4948 17.9983 17.2718 17.9983 16.9989C17.9 17.0769 17.8401 17.1221 17.783 17.1699C14.8783 19.5989 11.5392 20.3698 7.86072 19.2221C4.15867 18.0671 1.93644 15.5518 1.16935 11.9356C0.798701 10.1896 1.02164 8.47016 1.71131 6.81047C1.85408 6.46689 2.07372 6.32862 2.39275 6.36968C2.77547 6.41958 2.95668 6.77616 2.83148 7.16341C2.6371 7.76585 2.40922 8.3662 2.29995 8.98372C1.57623 13.0922 4.21577 17.1148 8.44442 18.262C11.6259 19.1254 14.4835 18.4637 16.966 16.3819C17.039 16.3206 17.1285 16.2774 17.2103 16.226C17.1911 16.1963 17.1719 16.1667 17.1527 16.1366Z" fill="#808191"/>
                        <rect x="10.5063" y="5.97818" width="0.71814" height="9.34189" fill="#808191"/>
                        </svg>
                        
                        <a href="#">  Section  4</a></li>
                    <li>
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3946 7.73942C13.3946 8.60598 12.3324 9.3797 10.7147 9.8594C9.74566 10.118 8.74689 10.2636 7.74059 10.2927C7.55575 10.3081 7.36983 10.3081 7.18499 10.2927C3.76969 10.2927 0.991699 9.13211 0.991699 7.70847C0.991699 6.28484 3.76969 5.12427 7.18499 5.12427H7.74059C8.01839 5.12427 8.27985 5.12427 8.5413 5.12427C10.0011 5.24113 11.4008 5.72749 12.5939 6.53243C12.8123 6.66607 12.9972 6.84337 13.1355 7.05189C13.2739 7.26041 13.3623 7.49508 13.3946 7.73942V7.73942Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M13.3948 7.73764V11.436C13.3948 12.38 12.2019 13.1846 10.4044 13.6334C9.33706 13.8948 8.2386 14.0248 7.13616 14.0202C4.30914 14.0202 1.92334 13.231 1.18799 12.1633" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M13.3946 11.4367V15.2898C13.3946 16.7289 10.6166 17.874 7.18499 17.874C3.75335 17.874 0.991699 16.7289 0.991699 15.2898" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M8.10023 4.82975C7.88122 4.58721 7.75461 4.28203 7.74072 3.96319C7.74072 2.53954 10.5187 1.37897 13.9504 1.37897C17.382 1.37897 20.1436 2.53954 20.1436 3.96319C20.1436 5.38683 17.3656 6.53193 13.9504 6.53193C13.4986 6.55548 13.0458 6.55548 12.594 6.53193" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M13.395 14.0831H13.9506C17.3659 14.0831 20.1439 12.938 20.1439 11.5143" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M13.395 10.2305H13.9506C17.3659 10.2305 20.1439 9.06996 20.1439 7.6618" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M20.1431 11.5142V7.66111V3.96274" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M0.991699 15.2891V7.73764" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        </svg>
                        
                        <a href="#">  Section  5</a></li>
                    <li>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.6717 11.0096H16.3517C16.3517 15.0057 12.8817 18.2917 8.6717 18.2917C4.4517 18.2917 0.991699 15.0057 0.991699 11.0096C0.991699 7.01342 4.4617 3.72748 8.6717 3.72748V11.0096Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M11.812 8.05591V0.773804C13.852 0.773804 15.802 1.54084 17.242 2.90446C18.682 4.26808 19.492 6.12412 19.492 8.04644H11.812V8.05591Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        </svg>
                        <a href="#">  Section  6</a></li>
                    <li>
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3794 13.7657L19.4894 13.7657L19.4894 8.14072L15.3794 8.14072L15.3794 13.7657Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M8.18447 13.7639L12.1945 13.7639L12.1945 4.62567L8.18447 4.62567L8.18447 13.7639Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M0.991699 13.762L5.1017 13.762L5.1017 1.1106L0.991699 1.1106L0.991699 13.762Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        </svg>
                        <a href="#">  Section  7</a></li>
                    <li>
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.3588 10.8199C4.50756 10.8199 5.4388 10.0051 5.4388 9.00001C5.4388 7.99489 4.50756 7.18008 3.3588 7.18008C2.21005 7.18008 1.27881 7.99489 1.27881 9.00001C1.27881 10.0051 2.21005 10.8199 3.3588 10.8199Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M13.4388 4.49525C14.5544 4.49525 15.4588 3.68044 15.4588 2.67532C15.4588 1.6702 14.5544 0.855408 13.4388 0.855408C12.3232 0.855408 11.4188 1.6702 11.4188 2.67532C11.4188 3.68044 12.3232 4.49525 13.4388 4.49525Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M13.4388 17.1446C14.5544 17.1446 15.4588 16.3298 15.4588 15.3247C15.4588 14.3196 14.5544 13.5048 13.4388 13.5048C12.3232 13.5048 11.4188 14.3196 11.4188 15.3247C11.4188 16.3298 12.3232 17.1446 13.4388 17.1446Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M5.59882 7.59453L11.1988 4.08081" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M11.1988 13.9192L5.59882 10.4055" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                        </svg>
                        
                        <a href="#">  Section  8</a></li>
                    <li>
                        
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3317 18.524H3.0517C1.9117 18.524 0.991699 17.6529 0.991699 16.5733V2.94663C0.991699 1.86711 1.9117 0.995911 3.0517 0.995911H13.3317C14.4717 0.995911 15.3917 1.86711 15.3917 2.94663V16.5733C15.3817 17.6529 14.4617 18.524 13.3317 18.524Z" stroke="#808191" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M4.08173 4.9447H12.3017" stroke="#808191" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M4.08173 9.81207H12.3017" stroke="#808191" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M4.08173 14.6794H12.3017" stroke="#808191" stroke-linecap="round" strokeLinejoin="round"/>
                        </svg> 
                        <a href="#">  Documentation</a></li>
                </ul>

            </div>
        </div>
    )
}
export default LeftNavbar
