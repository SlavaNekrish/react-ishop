import { Link, useLocation } from 'react-router-dom';
import Search from './Search';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlicee';
import { useEffect, useRef } from 'react';

function Header() {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = useRef(false);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    // если меняется корзина - делаем перерисовку
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <svg
              width="107"
              height="64"
              viewBox="0 0 87 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2_253)">
                <path
                  d="M21.0193 42.9524C20.5537 42.9646 20.0905 42.8816 19.6581 42.7086C19.2256 42.5356 18.833 42.2763 18.5042 41.9464C17.8361 41.2744 17.502 40.2722 17.502 38.9283C17.5015 37.8741 17.709 36.8303 18.1125 35.8564C18.509 34.8822 19.0544 33.9754 19.7291 33.1685C20.3576 32.4111 21.1124 31.768 21.9601 31.2678C22.6893 30.8216 23.5243 30.5777 24.3792 30.5613C25.2393 30.5613 25.8268 30.8147 26.1416 31.3292C26.4434 31.7992 26.6058 32.3451 26.6101 32.9036C26.6212 33.4662 26.4749 34.0208 26.1877 34.5048C26.0774 34.7144 25.9116 34.8897 25.7085 35.0116C25.5053 35.1335 25.2727 35.1972 25.0358 35.196C24.8575 35.195 24.682 35.1516 24.5238 35.0695C24.3656 34.9874 24.2292 34.8689 24.1257 34.7237C24.5028 34.4819 24.7901 34.1231 24.9436 33.7023C25.1612 33.246 25.279 32.7485 25.2892 32.2431C25.3002 32.0388 25.2508 31.8358 25.1471 31.6595C25.0785 31.5841 24.9929 31.5263 24.8973 31.4909C24.8018 31.4555 24.6992 31.4435 24.598 31.456C23.9437 31.4947 23.325 31.7672 22.8547 32.2239C22.2047 32.7856 21.643 33.4419 21.1883 34.1707C20.6773 34.9584 20.2562 35.8007 19.9326 36.682C19.6237 37.4745 19.4585 38.3158 19.445 39.1664C19.4397 39.7943 19.6028 40.4122 19.9173 40.9557C20.2283 41.501 20.8388 41.7736 21.7374 41.7736C22.6256 41.7601 23.496 41.5223 24.2678 41.0824C25.1729 40.5737 25.9762 39.9019 26.637 39.1011C27.3933 38.2051 27.9896 37.1854 28.3995 36.0868L28.8065 36.4017C28.3404 37.6293 27.672 38.7701 26.829 39.7769C26.0547 40.7165 25.1183 41.5098 24.0643 42.1192C23.1386 42.6559 22.0893 42.9431 21.0193 42.9524Z"
                  fill="#A260A3"
                />
                <path
                  d="M29.9738 42.196C29.0701 42.196 28.4302 41.9195 28.0539 41.3665C27.6614 40.7648 27.463 40.0572 27.4856 39.3391C27.4919 38.6567 27.598 37.9788 27.8004 37.327C28.0052 36.6493 28.2847 35.9963 28.6337 35.3802C28.934 34.8277 29.3232 34.3282 29.7856 33.9019C30.1345 33.5589 30.5985 33.3577 31.0873 33.3374C31.1989 33.3382 31.31 33.3537 31.4175 33.3835C31.5327 33.4181 31.6441 33.4526 31.7478 33.4949C31.4794 33.7694 31.2518 34.081 31.072 34.4203C30.7902 34.9142 30.5438 35.4275 30.3347 35.9562C30.1089 36.5155 29.9153 37.0873 29.7549 37.6688C29.6119 38.1387 29.5318 38.6255 29.5168 39.1164C29.478 39.5924 29.588 40.0688 29.8317 40.4795C29.922 40.6128 30.0441 40.7215 30.1868 40.7959C30.3296 40.8703 30.4886 40.908 30.6496 40.9058C31.2354 40.845 31.7861 40.5973 32.2201 40.1992C32.8848 39.668 33.4853 39.061 34.0094 38.3907C33.3993 37.876 32.9291 37.2156 32.6424 36.4708C32.3244 35.7092 32.16 34.8923 32.1586 34.067C32.1533 33.401 32.2759 32.7401 32.5196 32.1202C32.7332 31.5483 33.0966 31.0444 33.5717 30.6611C34.0447 30.2893 34.633 30.095 35.2343 30.112C36.0945 30.112 36.6704 30.3424 36.9623 30.8032C37.2829 31.3267 37.4431 31.9328 37.423 32.5464C37.3974 33.4812 37.1942 34.4025 36.824 35.2612C36.4215 36.2686 35.9171 37.2323 35.3188 38.1372C35.6832 38.3431 36.0945 38.4516 36.513 38.4521C36.8975 38.4427 37.2783 38.374 37.6419 38.2486C38.0962 38.0915 38.5169 37.8506 38.8822 37.5382C39.3152 37.1744 39.6549 36.7123 39.8729 36.1904L40.2569 36.5015C39.9269 37.3841 39.2996 38.1242 38.4828 38.5942C37.8159 38.9745 37.0654 39.1842 36.298 39.2047C36.0401 39.204 35.7829 39.1783 35.53 39.1279C35.2811 39.0765 35.0388 38.9966 34.8081 38.8898C34.144 39.7836 33.3552 40.5776 32.4658 41.2475C31.7618 41.8286 30.886 42.1619 29.9738 42.196ZM34.5816 37.5882C35.1 36.8242 35.5376 36.0083 35.8871 35.1537C36.2139 34.3936 36.39 33.5772 36.4055 32.75C36.4388 32.2884 36.3459 31.8265 36.1367 31.4137C36.0743 31.288 35.9787 31.1819 35.8602 31.1068C35.7418 31.0316 35.605 30.9904 35.4647 30.9875C35.0423 30.9875 34.6161 31.2947 34.1746 31.9014C33.7142 32.5792 33.4828 33.3865 33.5141 34.2053C33.5155 34.828 33.606 35.4474 33.7829 36.0445C33.9403 36.6077 34.2151 37.1311 34.5892 37.5805L34.5816 37.5882Z"
                  fill="#A260A3"
                />
                <path
                  d="M41.8811 42.146C40.9775 42.146 40.3375 41.8376 39.9612 41.2206C39.5543 40.5228 39.3532 39.724 39.3814 38.9167C39.4129 37.7043 39.6026 36.5012 39.9458 35.338C40.3578 33.8534 40.8566 32.3944 41.4395 30.9683C42.0565 29.4323 42.7323 27.9399 43.467 26.491C44.2017 25.0421 44.9338 23.7174 45.6634 22.5168C46.2615 21.5117 46.9394 20.5563 47.6908 19.6599C48.309 18.9457 48.7967 18.5925 49.1538 18.5925C49.2743 18.5973 49.3912 18.6358 49.4909 18.7037C49.5907 18.7716 49.6695 18.8661 49.7182 18.9765C49.8768 19.2723 49.9932 19.589 50.0638 19.9172C50.1428 20.2417 50.1853 20.574 50.1905 20.9079C50.1559 21.6631 50.0124 22.4093 49.7643 23.1235C49.4309 24.1639 49.0321 25.1822 48.5701 26.1723C48.0307 27.3373 47.423 28.4695 46.75 29.5629C46.0479 30.702 45.2786 31.7983 44.4461 32.8459C43.6714 33.8338 42.7921 34.735 41.8235 35.5338C41.6968 36.0983 41.6008 36.6474 41.524 37.1811C41.4532 37.69 41.4173 38.2032 41.4165 38.717C41.3771 39.3444 41.4959 39.9715 41.7621 40.541C41.8615 40.7276 42.0115 40.8824 42.1949 40.9876C42.3782 41.0929 42.5876 41.1444 42.7988 41.1361C43.4365 41.1026 44.0377 40.8281 44.4807 40.3682C45.0835 39.8045 45.6113 39.1657 46.0512 38.4675C46.5375 37.7117 46.9626 36.9181 47.3222 36.0944L47.7945 36.3479C47.1093 37.8899 46.1868 39.3151 45.0605 40.5717C44.0647 41.6212 43.0049 42.146 41.8811 42.146ZM42.1 34.4663C42.8769 33.6801 43.5907 32.834 44.2349 31.9359C44.9248 30.9797 45.5656 29.989 46.1548 28.9677C46.7539 27.9425 47.2838 26.9441 47.7445 25.9842C48.1521 25.1424 48.5086 24.2769 48.812 23.3923C49.0257 22.8215 49.1551 22.2225 49.196 21.6144C49.2119 21.4737 49.1838 21.3314 49.1154 21.2074C49.0655 21.146 49.0194 21.1114 48.9771 21.1114C48.8082 21.1114 48.5202 21.3802 48.1132 21.9139C47.598 22.6048 47.1199 23.3226 46.6809 24.0642C46.1408 24.9653 45.5866 25.9893 45.0183 27.1361C44.45 28.2829 43.9098 29.4874 43.3978 30.7494C42.9029 31.9657 42.4697 33.2063 42.1 34.4663Z"
                  fill="#A260A3"
                />
                <path
                  d="M48.9426 42.0078C48.6 42.0333 48.2563 41.977 47.9399 41.8434C47.6234 41.7099 47.3432 41.503 47.1225 41.2398C46.7156 40.7029 46.5043 40.0432 46.5235 39.3698C46.5438 38.7536 46.6339 38.1417 46.7923 37.5459C46.9858 36.7657 47.2216 35.9966 47.4988 35.242C47.7809 34.4581 48.1223 33.6969 48.5202 32.965C48.8532 32.3307 49.2704 31.7442 49.7605 31.2217C49.9195 31.0286 50.1156 30.8694 50.3372 30.7533C50.5588 30.6372 50.8014 30.5667 51.0506 30.5459C51.2277 30.5419 51.4 30.6034 51.5345 30.7187C51.6061 30.7837 51.662 30.8641 51.6979 30.954C51.7338 31.0438 51.7488 31.1406 51.7418 31.2371C51.6713 31.6762 51.5048 32.0945 51.2542 32.462C50.9278 33.0264 50.5476 33.6754 50.1022 34.4088C49.6583 35.1453 49.2732 35.9156 48.9503 36.7127C48.6407 37.442 48.4751 38.2243 48.4626 39.0166C48.4626 39.7845 48.5893 40.2722 48.8466 40.5256C49.0039 40.6622 49.1867 40.7663 49.3843 40.8322C49.582 40.8981 49.7907 40.9244 49.9985 40.9096C50.7102 40.9096 51.4692 40.5538 52.2755 39.8421C53.0819 39.1305 53.9356 37.8838 54.8367 36.1021L55.117 36.417C54.6406 38.0141 53.7332 39.449 52.4944 40.564C51.5233 41.4579 50.2619 41.9707 48.9426 42.0078ZM52.7133 27.6199C52.3973 27.6245 52.0866 27.5378 51.8186 27.3703C51.6935 27.2866 51.5923 27.1718 51.525 27.0372C51.4577 26.9025 51.4265 26.7527 51.4346 26.6024C51.45 26.3598 51.5292 26.1256 51.664 25.9233C51.7988 25.7211 51.9846 25.558 52.2026 25.4504C52.6573 25.144 53.1904 24.9748 53.7385 24.9628C54.0123 24.9481 54.283 25.0266 54.5065 25.1855C54.6106 25.2822 54.6903 25.4022 54.739 25.5357C54.7878 25.6692 54.8041 25.8124 54.7868 25.9534C54.7717 26.1813 54.7059 26.403 54.5944 26.6023C54.4828 26.8015 54.3281 26.9734 54.1417 27.1054C53.7468 27.4471 53.2393 27.6305 52.7171 27.6199H52.7133Z"
                  fill="#A260A3"
                />
                <path
                  d="M57.179 43.4861C56.0885 43.4861 55.277 43.1303 54.7446 42.4187C54.1699 41.5677 53.8882 40.5527 53.9421 39.5273C53.9717 38.274 54.1508 37.0288 54.4758 35.818C54.8628 34.3012 55.3359 32.8076 55.8927 31.3446C56.4763 29.7805 57.1304 28.2561 57.8549 26.7713C58.5793 25.2866 59.3076 23.9414 60.0397 22.7357C60.6407 21.7103 61.3348 20.7424 62.1132 19.8443C62.7634 19.1224 63.2972 18.7614 63.7144 18.7614C64.0715 18.7614 64.325 18.9803 64.4824 19.4219C64.6374 19.8438 64.718 20.2895 64.7205 20.739C64.6936 21.4664 64.5644 22.1864 64.3365 22.8777C64.0499 23.8002 63.6917 24.6989 63.2652 25.5656C62.7937 26.5367 62.2589 27.4757 61.664 28.3764C61.0779 29.2704 60.4218 30.1166 59.7018 30.9068C59.0744 31.609 58.3488 32.2168 57.5477 32.7116C57.3333 33.1764 57.1499 33.6549 56.9986 34.1438C56.7325 34.9578 56.512 35.7859 56.3381 36.6244C56.144 37.5176 56.0449 38.4289 56.0424 39.343C56.0147 40.069 56.1457 40.7924 56.4264 41.4626C56.5356 41.7226 56.7227 41.9424 56.9621 42.0917C57.2014 42.2409 57.4811 42.3122 57.7627 42.2958C58.455 42.2634 59.1174 42.0044 59.6481 41.5585C60.3078 41.0511 60.8445 40.4014 61.2185 39.6578C60.4663 39.2828 59.8589 38.67 59.4906 37.9145C59.1247 37.2012 58.9301 36.4123 58.9223 35.6106C58.8781 34.7349 59.1584 33.8736 59.7095 33.1915C59.9302 32.9101 60.2116 32.6821 60.5328 32.5245C60.8539 32.3669 61.2064 32.2839 61.5641 32.2815C61.8472 32.2739 62.1277 32.3373 62.38 32.4661C62.6322 32.5949 62.8481 32.7849 63.0079 33.0188C63.4057 33.6637 63.5923 34.4168 63.5417 35.1729C63.5395 35.8765 63.4557 36.5775 63.2921 37.2618C63.1211 37.9864 62.8632 38.6878 62.5241 39.3506C62.6278 39.3698 62.7391 39.3852 62.8543 39.3967C63.3155 39.4408 63.7809 39.3896 64.2215 39.2463C64.6621 39.103 65.0685 38.8705 65.4155 38.5635C66.1018 37.9507 66.6761 37.223 67.1127 36.4132C67.5927 35.5495 68.0073 34.651 68.353 33.7253C68.6985 32.796 68.9942 31.9705 69.2476 31.2601C69.1642 31.1574 69.0909 31.0468 69.0288 30.9299C68.9562 30.778 68.9232 30.6103 68.9328 30.4422C68.9268 29.9144 69.1107 29.4019 69.4511 28.9984C69.7967 28.5799 70.0847 28.3687 70.3151 28.3687C70.4841 28.3687 70.5877 28.4762 70.63 28.6836C70.6608 28.8175 70.6814 28.9536 70.6914 29.0906C70.6818 29.3157 70.6228 29.5359 70.5186 29.7357C70.4172 29.9255 70.3583 30.1352 70.3458 30.3501C70.3632 30.5007 70.4166 30.6449 70.5015 30.7706C70.5864 30.8962 70.7002 30.9996 70.8335 31.072L71.9509 31.8706C72.3787 32.188 72.7545 32.5702 73.0644 33.0034C73.4037 33.497 73.5747 34.0868 73.5521 34.6852C73.549 35.3378 73.4186 35.9834 73.1681 36.586C72.9032 37.2234 72.6421 37.8377 72.4002 38.4214C72.1653 38.9128 72.0346 39.4475 72.0162 39.9919C71.9986 40.1266 72.015 40.2637 72.064 40.3904C72.113 40.5172 72.1929 40.6297 72.2965 40.7176C72.4934 40.8439 72.7231 40.9093 72.9569 40.9058C73.5017 40.8874 74.0318 40.7244 74.4928 40.4335C75.0493 40.0962 75.5647 39.6954 76.0288 39.2393C76.5214 38.7659 76.9735 38.2522 77.3804 37.7033C77.735 37.2457 78.0305 36.7451 78.2597 36.2135L78.6706 36.5245C78.2408 37.4562 77.6909 38.3275 77.0348 39.1164C76.3827 39.9317 75.605 40.6381 74.7309 41.2091C73.9541 41.7289 73.0429 42.0117 72.1083 42.0232C71.4984 42.0598 70.8973 41.8636 70.4265 41.4741C70.2161 41.28 70.0517 41.0414 69.9454 40.7757C69.8391 40.5099 69.7935 40.2238 69.8121 39.9381C69.8264 39.2747 69.9767 38.6212 70.2537 38.0182C70.5455 37.3398 70.8335 36.6538 71.1176 35.9601C71.3781 35.3645 71.5215 34.7244 71.54 34.0747C71.5607 33.8034 71.5192 33.531 71.4187 33.2782C71.3182 33.0253 71.1614 32.7987 70.9602 32.6156C70.5826 32.2977 70.1891 31.9991 69.7814 31.7209C69.5254 32.5145 69.2272 33.3938 68.8867 34.3589C68.5453 35.3144 68.1133 36.235 67.5965 37.1082C67.1178 37.9378 66.4843 38.6677 65.7303 39.2585C64.9718 39.8335 64.04 40.1328 63.0886 40.1071C62.9421 40.1064 62.7959 40.0961 62.6508 40.0764L62.1785 40.0149C61.6338 40.954 60.9265 41.7887 60.0896 42.4801C59.2703 43.1514 58.2381 43.5082 57.179 43.4861ZM57.9009 31.4828C58.542 30.9693 59.1171 30.3786 59.6135 29.7242C60.1799 28.9991 60.6993 28.2385 61.1686 27.4472C61.6525 26.6408 62.0787 25.8498 62.4588 25.0741C62.7968 24.3923 63.0905 23.6895 63.3381 22.9699C63.5102 22.5164 63.6162 22.0405 63.653 21.5568C63.6603 21.4871 63.6483 21.4167 63.6184 21.3533C63.6096 21.337 63.5961 21.3235 63.5798 21.3147C63.5634 21.3058 63.5448 21.3019 63.5263 21.3034C63.3573 21.3034 63.0386 21.6029 62.5663 22.2019C61.9887 22.9597 61.4639 23.7565 60.9958 24.5865C60.4199 25.5848 59.849 26.6856 59.2833 27.8887C58.7341 29.0509 58.272 30.2522 57.9009 31.4828ZM61.5449 39.0243C61.7795 38.5338 61.9586 38.0186 62.0787 37.4883C62.2067 36.9486 62.2712 36.3957 62.2707 35.841C62.2972 35.2502 62.195 34.6606 61.9712 34.1131C61.7715 33.6946 61.5257 33.4834 61.2339 33.4834C60.9421 33.4834 60.6387 33.6984 60.4007 34.1285C60.1432 34.6273 60.0189 35.1841 60.0397 35.745C60.0485 36.3572 60.1655 36.963 60.3853 37.5344C60.5953 38.1462 61.0034 38.6705 61.5449 39.0243Z"
                  fill="#A260A3"
                />
                <path
                  d="M79.8302 42.0078C79.4876 42.034 79.1437 41.9779 78.8271 41.8443C78.5105 41.7108 78.2305 41.5035 78.0101 41.2399C77.6033 40.703 77.3919 40.0432 77.4111 39.3698C77.4294 38.7535 77.5197 38.1414 77.6799 37.5459C77.8716 36.7652 78.1075 35.996 78.3864 35.242C78.6685 34.4581 79.01 33.6969 79.4078 32.965C79.7395 32.3298 80.1568 31.7433 80.6481 31.2217C80.8063 31.0286 81.0017 30.8693 81.2226 30.7532C81.4436 30.6371 81.6857 30.5666 81.9344 30.5459C82.1126 30.542 82.2861 30.6035 82.4221 30.7187C82.4933 30.7839 82.5486 30.8645 82.5839 30.9543C82.6191 31.0442 82.6334 31.1409 82.6256 31.2371C82.557 31.6761 82.3917 32.0945 82.1418 32.462C81.8141 33.0277 81.4301 33.6767 80.9898 34.4088C80.546 35.1454 80.1609 35.9157 79.8379 36.7127C79.53 37.4426 79.3645 38.2246 79.3502 39.0166C79.3502 39.7692 79.4782 40.2722 79.7342 40.5256C79.8915 40.6624 80.0742 40.7667 80.2719 40.8325C80.4696 40.8984 80.6783 40.9246 80.8862 40.9096C81.6004 40.9096 82.3568 40.5525 83.167 39.8421C83.9772 39.1318 84.8258 37.8838 85.7243 36.1021L86.0085 36.417C85.5321 38.0141 84.6247 39.449 83.3859 40.564C82.4135 41.4582 81.1507 41.9709 79.8302 42.0078ZM83.6009 27.62C83.2849 27.6245 82.9743 27.5378 82.7062 27.3704C82.5811 27.2866 82.4799 27.1718 82.4126 27.0372C82.3453 26.9025 82.3142 26.7527 82.3223 26.6024C82.3369 26.3596 82.4157 26.1251 82.5506 25.9227C82.6856 25.7203 82.8717 25.5573 83.0902 25.4504C83.5449 25.1441 84.078 24.9748 84.6262 24.9628C84.9001 24.9466 85.1713 25.0252 85.3941 25.1855C85.4987 25.282 85.5789 25.4019 85.6283 25.5354C85.6777 25.6689 85.6948 25.8121 85.6783 25.9535C85.6632 26.1813 85.5974 26.403 85.4858 26.6023C85.3742 26.8016 85.2196 26.9734 85.0332 27.1054C84.6359 27.4483 84.1256 27.6317 83.6009 27.62Z"
                  fill="#A260A3"
                />
                <path
                  d="M17.4213 18.3116H4.41964L1.04059 25.9913H0L11.4043 -0.012085H12.8481L24.2178 26.0182H20.762L17.4213 18.3116ZM17.0719 17.5705L10.9282 3.4169L4.71532 17.5705H17.0719Z"
                  fill="#A260A3"
                />
                <path
                  d="M50.4439 26.0187H46.6579C45.8663 25.4516 45.2106 24.7159 44.7379 23.8646L40.7983 16.9529C40.2648 16.051 39.4766 15.3269 38.5328 14.8717H32.2086V26.0072H28.8986V0H39.1164C44.4922 0 48.5509 3.15635 48.5509 7.39168C48.5509 11.2546 45.3178 14.192 40.7522 14.7488C42.5339 15.2672 43.9815 16.1964 44.7264 17.4981L48.0671 23.1811C48.6593 24.278 49.4679 25.2433 50.4439 26.0187ZM32.2086 14.1152H38.4829C42.4609 14.1152 45.0951 11.4773 45.0951 7.43008C45.0951 3.3829 42.4609 0.744929 38.4829 0.744929H32.2086V14.1152Z"
                  fill="#A260A3"
                />
                <path
                  d="M71.6936 0.744929H62.9657V26.0187H59.6595V0.744929H50.8625V0H71.7013L71.6936 0.744929Z"
                  fill="#A260A3"
                />
                <path
                  d="M20.2513 42.1844C19.7857 42.1966 19.3225 42.1136 18.8901 41.9406C18.4576 41.7676 18.065 41.5083 17.7362 41.1784C17.0681 40.5064 16.734 39.5042 16.734 38.1603C16.7335 37.1061 16.941 36.0622 17.3445 35.0884C17.741 34.1142 18.2864 33.2074 18.9611 32.4005C19.5896 31.6431 20.3444 31 21.1921 30.4998C21.9213 30.0535 22.7563 29.8097 23.6112 29.7933C24.4713 29.7933 25.0588 30.0467 25.3736 30.5612C25.6754 31.0312 25.8378 31.5771 25.8421 32.1356C25.8531 32.6982 25.7069 33.2528 25.4197 33.7368C25.3094 33.9464 25.1436 34.1217 24.9405 34.2436C24.7373 34.3654 24.5046 34.4292 24.2678 34.428C24.0895 34.427 23.914 34.3836 23.7558 34.3015C23.5976 34.2194 23.4612 34.1009 23.3577 33.9557C23.7348 33.7139 24.0221 33.3551 24.1756 32.9343C24.3932 32.478 24.511 31.9805 24.5212 31.4751C24.5322 31.2708 24.4828 31.0678 24.3791 30.8915C24.3105 30.8161 24.2249 30.7583 24.1293 30.7229C24.0338 30.6875 23.9312 30.6755 23.83 30.688C23.1757 30.7267 22.557 30.9992 22.0867 31.4559C21.4367 32.0176 20.875 32.6739 20.4203 33.4027C19.9093 34.1904 19.4882 35.0327 19.1646 35.914C18.8557 36.7065 18.6905 37.5478 18.677 38.3983C18.6717 39.0263 18.8348 39.6442 19.1493 40.1877C19.4603 40.733 20.0708 41.0056 20.9693 41.0056C21.8576 40.9921 22.728 40.7543 23.4998 40.3144C24.4049 39.8057 25.2082 39.1339 25.869 38.3331C26.6253 37.4371 27.2215 36.4174 27.6315 35.3188L28.0385 35.6337C27.5724 36.8613 26.904 38.0021 26.061 39.0089C25.2867 39.9485 24.3503 40.7418 23.2963 41.3512C22.3706 41.8879 21.3213 42.1751 20.2513 42.1844Z"
                  fill="#EDC454"
                />
                <path
                  d="M29.2058 41.428C28.3022 41.428 27.6622 41.1515 27.2859 40.5986C26.8934 39.9969 26.6951 39.2892 26.7176 38.5712C26.724 37.8887 26.8301 37.2109 27.0325 36.5591C27.2373 35.8813 27.5167 35.2284 27.8657 34.6123C28.1661 34.0597 28.5552 33.5603 29.0177 33.134C29.3666 32.791 29.8305 32.5898 30.3194 32.5695C30.431 32.5703 30.542 32.5857 30.6496 32.6156C30.7648 32.6501 30.8762 32.6847 30.9798 32.7269C30.7114 33.0015 30.4838 33.3131 30.304 33.6523C30.0223 34.1462 29.7759 34.6595 29.5668 35.1883C29.341 35.7476 29.1474 36.3194 28.987 36.9008C28.8439 37.3707 28.7639 37.8575 28.7489 38.3485C28.71 38.8245 28.82 39.3008 29.0638 39.7116C29.1541 39.8449 29.2761 39.9536 29.4189 40.028C29.5617 40.1024 29.7207 40.1401 29.8816 40.1378C30.4674 40.0771 31.0181 39.8294 31.4521 39.4313C32.1169 38.9001 32.7174 38.2931 33.2415 37.6227C32.6314 37.1081 32.1612 36.4477 31.8745 35.7028C31.5564 34.9413 31.392 34.1244 31.3907 33.2991C31.3854 32.633 31.5079 31.9722 31.7516 31.3523C31.9652 30.7804 32.3286 30.2764 32.8038 29.8931C33.2767 29.5213 33.865 29.327 34.4664 29.344C35.3265 29.344 35.9025 29.5744 36.1943 30.0352C36.515 30.5588 36.6752 31.1649 36.6551 31.7785C36.6295 32.7132 36.4262 33.6346 36.0561 34.4933C35.6535 35.5007 35.1492 36.4643 34.5509 37.3693C34.9153 37.5752 35.3266 37.6836 35.7451 37.6842C36.1296 37.6747 36.5104 37.6061 36.874 37.4807C37.3282 37.3236 37.7489 37.0826 38.1142 36.7703C38.5473 36.4065 38.887 35.9444 39.1049 35.4225L39.4889 35.7335C39.159 36.6162 38.5316 37.3562 37.7149 37.8262C37.048 38.2066 36.2975 38.4163 35.53 38.4368C35.2722 38.4361 35.015 38.4104 34.7621 38.36C34.5131 38.3085 34.2709 38.2287 34.0402 38.1219C33.3761 39.0157 32.5873 39.8096 31.6979 40.4796C30.9938 41.0607 30.1181 41.394 29.2058 41.428ZM33.8136 36.8202C34.3321 36.0562 34.7696 35.2403 35.1192 34.3858C35.446 33.6256 35.622 32.8093 35.6376 31.982C35.6709 31.5205 35.578 31.0585 35.3688 30.6457C35.3064 30.5201 35.2108 30.414 35.0923 30.3388C34.9738 30.2637 34.837 30.2224 34.6968 30.2195C34.2744 30.2195 33.8482 30.5267 33.4066 31.1334C32.9463 31.8112 32.7149 32.6185 32.7462 33.4373C32.7476 34.0601 32.8381 34.6795 33.0149 35.2766C33.1723 35.8397 33.4471 36.3632 33.8213 36.8125L33.8136 36.8202Z"
                  fill="#EDC454"
                />
                <path
                  d="M41.1131 41.3781C40.2095 41.3781 39.5695 41.0696 39.1932 40.4527C38.7862 39.7549 38.5852 38.9561 38.6134 38.1488C38.6449 36.9364 38.8346 35.7333 39.1778 34.57C39.5898 33.0855 40.0886 31.6264 40.6715 30.2003C41.2885 28.6644 41.9643 27.172 42.699 25.7231C43.4336 24.2742 44.1658 22.9494 44.8953 21.7488C45.4934 20.7437 46.1714 19.7884 46.9228 18.892C47.541 18.1778 48.0286 17.8245 48.3858 17.8245C48.5063 17.8293 48.6232 17.8679 48.7229 17.9357C48.8227 18.0036 48.9015 18.0981 48.9502 18.2085C49.1088 18.5044 49.2251 18.8211 49.2958 19.1493C49.3748 19.4737 49.4173 19.806 49.4225 20.1399C49.3879 20.8952 49.2444 21.6414 48.9963 22.3555C48.6629 23.396 48.2641 24.4143 47.8021 25.4044C47.2627 26.5694 46.6549 27.7016 45.982 28.7949C45.2799 29.934 44.5106 31.0303 43.6781 32.078C42.9034 33.0659 42.024 33.9671 41.0555 34.7659C40.9288 35.3303 40.8328 35.8794 40.756 36.4132C40.6852 36.9221 40.6493 37.4353 40.6485 37.9491C40.6091 38.5764 40.7279 39.2036 40.9941 39.773C41.0935 39.9596 41.2435 40.1144 41.4269 40.2197C41.6102 40.325 41.8196 40.3764 42.0308 40.3682C42.6685 40.3346 43.2697 40.0601 43.7127 39.6002C44.3155 39.0366 44.8433 38.3978 45.2832 37.6995C45.7696 36.9437 46.1946 36.1502 46.5542 35.3265L47.0265 35.5799C46.3413 37.122 45.4188 38.5472 44.2925 39.8037C43.2967 40.8533 42.2369 41.3781 41.1131 41.3781ZM41.332 33.6984C42.1089 32.9122 42.8227 32.0661 43.4669 31.168C44.1568 30.2117 44.7976 29.2211 45.3868 28.1998C45.9859 27.1745 46.5158 26.1762 46.9765 25.2162C47.3841 24.3745 47.7406 23.509 48.044 22.6243C48.2577 22.0535 48.3871 21.4546 48.428 20.8465C48.4439 20.7057 48.4158 20.5635 48.3474 20.4395C48.2974 20.378 48.2514 20.3435 48.2091 20.3435C48.0402 20.3435 47.7522 20.6122 47.3452 21.146C46.83 21.8369 46.3519 22.5547 45.9129 23.2963C45.3702 24.1974 44.816 25.2213 44.2503 26.3682C43.6845 27.515 43.1444 28.7194 42.6298 29.9814C42.1349 31.1978 41.7017 32.4383 41.332 33.6984Z"
                  fill="#EDC454"
                />
                <path
                  d="M48.1746 41.2398C47.832 41.2653 47.4883 41.209 47.1719 41.0755C46.8554 40.9419 46.5752 40.735 46.3545 40.4719C45.9476 39.935 45.7363 39.2752 45.7555 38.6019C45.7757 37.9857 45.8659 37.3738 46.0243 36.7779C46.2178 35.9977 46.4536 35.2286 46.7308 34.474C47.0129 33.6902 47.3543 32.9289 47.7522 32.197C48.0852 31.5627 48.5024 30.9763 48.9925 30.4537C49.1515 30.2607 49.3476 30.1014 49.5692 29.9853C49.7908 29.8693 50.0334 29.7987 50.2826 29.7779C50.4597 29.7739 50.632 29.8354 50.7665 29.9507C50.8381 30.0157 50.894 30.0962 50.9299 30.186C50.9658 30.2758 50.9808 30.3726 50.9738 30.4691C50.9033 30.9083 50.7368 31.3265 50.4862 31.694C50.1598 32.2584 49.7796 32.9074 49.3342 33.6408C48.8903 34.3773 48.5052 35.1477 48.1823 35.9447C47.8727 36.674 47.7071 37.4564 47.6946 38.2486C47.6946 39.0166 47.8213 39.5042 48.0786 39.7576C48.2359 39.8942 48.4187 39.9984 48.6163 40.0643C48.814 40.1301 49.0227 40.1564 49.2305 40.1416C49.9422 40.1416 50.7012 39.7858 51.5075 39.0742C52.3139 38.3625 53.1676 37.1158 54.0687 35.3342L54.349 35.649C53.8726 37.2462 52.9652 38.6811 51.7264 39.796C50.7553 40.6899 49.4939 41.2027 48.1746 41.2398ZM51.9453 26.852C51.6293 26.8565 51.3186 26.7699 51.0506 26.6024C50.9255 26.5187 50.8243 26.4038 50.757 26.2692C50.6897 26.1346 50.6585 25.9847 50.6666 25.8344C50.682 25.5918 50.7612 25.3576 50.896 25.1554C51.0308 24.9531 51.2166 24.79 51.4346 24.6824C51.8893 24.3761 52.4224 24.2068 52.9705 24.1948C53.2443 24.1801 53.515 24.2586 53.7385 24.4175C53.8426 24.5142 53.9223 24.6343 53.971 24.7678C54.0198 24.9013 54.0361 25.0444 54.0188 25.1855C54.0037 25.4134 53.9379 25.635 53.8263 25.8343C53.7148 26.0336 53.5601 26.2054 53.3737 26.3374C52.9788 26.6792 52.4713 26.8625 51.9491 26.852H51.9453Z"
                  fill="#EDC454"
                />
                <path
                  d="M56.411 42.7182C55.3205 42.7182 54.509 42.3623 53.9766 41.6507C53.4019 40.7998 53.1201 39.7847 53.1741 38.7593C53.2037 37.506 53.3828 36.2608 53.7078 35.05C54.0948 33.5332 54.5679 32.0396 55.1247 30.5766C55.7083 29.0125 56.3624 27.4881 57.0869 26.0034C57.8113 24.5186 58.5396 23.1734 59.2717 21.9677C59.8727 20.9423 60.5668 19.9745 61.3452 19.0763C61.9954 18.3544 62.5292 17.9935 62.9464 17.9935C63.3035 17.9935 63.557 18.2123 63.7144 18.6539C63.8694 19.0758 63.95 19.5215 63.9525 19.971C63.9256 20.6984 63.7964 21.4184 63.5685 22.1098C63.2819 23.0322 62.9237 23.9309 62.4972 24.7977C62.0257 25.7687 61.4909 26.7077 60.896 27.6084C60.3099 28.5025 59.6538 29.3486 58.9338 30.1389C58.3064 30.841 57.5808 31.4489 56.7796 31.9436C56.5653 32.4084 56.3819 32.8869 56.2306 33.3759C55.9645 34.1898 55.744 35.0179 55.5701 35.8564C55.376 36.7496 55.2769 37.6609 55.2744 38.575C55.2466 39.301 55.3777 40.0244 55.6584 40.6946C55.7676 40.9546 55.9547 41.1744 56.1941 41.3237C56.4334 41.4729 56.7131 41.5442 56.9947 41.5278C57.687 41.4955 58.3494 41.2364 58.88 40.7906C59.5397 40.2831 60.0765 39.6334 60.4505 38.8898C59.6983 38.5149 59.0909 37.9021 58.7226 37.1466C58.3567 36.4332 58.1621 35.6444 58.1543 34.8427C58.1101 33.9669 58.3904 33.1056 58.9415 32.4236C59.1622 32.1421 59.4436 31.9141 59.7648 31.7565C60.0859 31.5989 60.4384 31.5159 60.7961 31.5135C61.0792 31.5059 61.3597 31.5694 61.612 31.6982C61.8642 31.827 62.0801 32.017 62.2399 32.2508C62.6377 32.8958 62.8243 33.6488 62.7736 34.4049C62.7714 35.1085 62.6877 35.8095 62.524 36.4938C62.3531 37.2185 62.0952 37.9198 61.7561 38.5827C61.8598 38.6019 61.9711 38.6172 62.0863 38.6287C62.5475 38.6729 63.0129 38.6217 63.4535 38.4783C63.8941 38.335 64.3005 38.1026 64.6475 37.7955C65.3338 37.1827 65.9081 36.455 66.3447 35.6452C66.8247 34.7815 67.2393 33.883 67.585 32.9573C67.9305 32.0281 68.2262 31.2025 68.4796 30.4921C68.3962 30.3894 68.3229 30.2788 68.2608 30.1619C68.1882 30.01 68.1551 29.8423 68.1648 29.6742C68.1588 29.1464 68.3427 28.634 68.6831 28.2305C69.0287 27.8119 69.3167 27.6007 69.5471 27.6007C69.7161 27.6007 69.8197 27.7083 69.862 27.9156C69.8928 28.0495 69.9134 28.1856 69.9234 28.3226C69.9138 28.5477 69.8548 28.768 69.7506 28.9677C69.6492 29.1576 69.5902 29.3672 69.5778 29.5821C69.5952 29.7327 69.6486 29.877 69.7335 30.0026C69.8183 30.1283 69.9322 30.2316 70.0655 30.304L71.1829 31.1027C71.6107 31.42 71.9865 31.8022 72.2964 32.2354C72.6357 32.729 72.8067 33.3188 72.7841 33.9173C72.781 34.5698 72.6506 35.2154 72.4001 35.818C72.1352 36.4554 71.8741 37.0698 71.6322 37.6534C71.3973 38.1449 71.2665 38.6796 71.2482 39.2239C71.2306 39.3587 71.247 39.4957 71.296 39.6224C71.345 39.7492 71.4249 39.8617 71.5285 39.9496C71.7254 40.0759 71.9551 40.1413 72.1889 40.1378C72.7337 40.1194 73.2638 39.9564 73.7248 39.6655C74.2813 39.3282 74.7967 38.9274 75.2608 38.4713C75.7534 37.998 76.2055 37.4842 76.6124 36.9354C76.967 36.4777 77.2625 35.9771 77.4917 35.4455L77.9026 35.7565C77.4728 36.6882 76.9229 37.5596 76.2668 38.3484C75.6147 39.1637 74.837 39.8701 73.9629 40.4411C73.1861 40.9609 72.2749 41.2437 71.3403 41.2552C70.7304 41.2919 70.1293 41.0956 69.6585 40.7061C69.4481 40.5121 69.2837 40.2734 69.1774 40.0077C69.0711 39.7419 69.0255 39.4558 69.0441 39.1702C69.0584 38.5067 69.2087 37.8533 69.4857 37.2502C69.7775 36.5719 70.0655 35.8858 70.3496 35.1921C70.6101 34.5966 70.7535 33.9565 70.772 33.3067C70.7927 33.0354 70.7512 32.763 70.6507 32.5102C70.5502 32.2573 70.3934 32.0307 70.1922 31.8476C69.8146 31.5297 69.4211 31.2311 69.0134 30.9529C68.7574 31.7465 68.4592 32.6258 68.1187 33.5909C67.7773 34.5464 67.3453 35.467 66.8285 36.3402C66.3498 37.1698 65.7163 37.8998 64.9623 38.4905C64.2038 39.0655 63.272 39.3649 62.3206 39.3391C62.1741 39.3384 62.0279 39.3282 61.8828 39.3084L61.4105 39.247C60.8658 40.186 60.1585 41.0207 59.3216 41.7121C58.5022 42.3835 57.4701 42.7402 56.411 42.7182ZM57.1329 30.7148C57.774 30.2013 58.3491 29.6106 58.8455 28.9562C59.4119 28.2311 59.9313 27.4706 60.4006 26.6792C60.8845 25.8728 61.3107 25.0818 61.6908 24.3062C62.0288 23.6244 62.3225 22.9215 62.5701 22.2019C62.7422 21.7484 62.8482 21.2725 62.885 20.7889C62.8923 20.7191 62.8803 20.6488 62.8504 20.5854C62.8416 20.569 62.8281 20.5556 62.8118 20.5467C62.7954 20.5378 62.7768 20.5339 62.7583 20.5354C62.5893 20.5354 62.2706 20.8349 61.7983 21.434C61.2206 22.1918 60.6959 22.9885 60.2278 23.8185C59.6519 24.8169 59.081 25.9176 58.5153 27.1208C57.9661 28.2829 57.504 29.4842 57.1329 30.7148ZM60.7769 38.2563C61.0115 37.7658 61.1905 37.2506 61.3107 36.7203C61.4387 36.1806 61.5032 35.6278 61.5027 35.0731C61.5292 34.4822 61.427 33.8926 61.2031 33.3451C61.0035 32.9266 60.7577 32.7154 60.4659 32.7154C60.1741 32.7154 59.8707 32.9304 59.6327 33.3605C59.3752 33.8593 59.2509 34.4161 59.2717 34.9771C59.2805 35.5892 59.3975 36.195 59.6173 36.7664C59.8273 37.3782 60.2354 37.9025 60.7769 38.2563Z"
                  fill="#EDC454"
                />
                <path
                  d="M79.0622 41.2398C78.7196 41.266 78.3757 41.2099 78.0591 41.0764C77.7425 40.9428 77.4624 40.7355 77.2421 40.4719C76.8353 39.935 76.6239 39.2752 76.6431 38.6019C76.6614 37.9855 76.7517 37.3734 76.9119 36.7779C77.1036 35.9972 77.3395 35.228 77.6184 34.474C77.9005 33.6902 78.242 32.929 78.6398 32.197C78.9714 31.5619 79.3888 30.9753 79.8801 30.4537C80.0383 30.2606 80.2337 30.1013 80.4546 29.9852C80.6756 29.8691 80.9177 29.7986 81.1664 29.7779C81.3446 29.774 81.5181 29.8355 81.6541 29.9507C81.7253 30.0159 81.7806 30.0965 81.8158 30.1863C81.8511 30.2762 81.8654 30.3729 81.8576 30.4691C81.7889 30.9082 81.6237 31.3265 81.3738 31.694C81.0461 32.2597 80.6621 32.9087 80.2218 33.6408C79.778 34.3774 79.3929 35.1477 79.0699 35.9447C78.762 36.6746 78.5965 37.4566 78.5822 38.2486C78.5822 39.0012 78.7102 39.5042 78.9662 39.7577C79.1235 39.8944 79.3062 39.9987 79.5039 40.0646C79.7015 40.1305 79.9103 40.1567 80.1182 40.1416C80.8324 40.1416 81.5888 39.7845 82.399 39.0742C83.2092 38.3638 84.0578 37.1159 84.9563 35.3342L85.2405 35.649C84.7641 37.2462 83.8567 38.6811 82.6179 39.7961C81.6455 40.6902 80.3827 41.2029 79.0622 41.2398ZM82.8329 26.852C82.5169 26.8565 82.2063 26.7699 81.9382 26.6024C81.8131 26.5187 81.7119 26.4039 81.6446 26.2692C81.5773 26.1346 81.5461 25.9847 81.5542 25.8344C81.5689 25.5916 81.6477 25.3571 81.7826 25.1547C81.9176 24.9523 82.1037 24.7894 82.3222 24.6825C82.7769 24.3761 83.31 24.2068 83.8582 24.1948C84.1321 24.1786 84.4033 24.2572 84.6261 24.4175C84.7307 24.514 84.8109 24.634 84.8603 24.7674C84.9097 24.9009 84.9268 25.0441 84.9103 25.1855C84.8951 25.4134 84.8294 25.635 84.7178 25.8343C84.6062 26.0336 84.4516 26.2055 84.2652 26.3374C83.8679 26.6803 83.3576 26.8637 82.8329 26.852Z"
                  fill="#EDC454"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_253">
                  <rect width="86.02" height="43.4861" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Воздушные эмоции!</span>
          </div>
        </Link>
        {location.pathname !== '/cart' && <Search />}
        <div className="header__cart">
          {location.pathname !== '/cart' && (
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice + ' Br'}</span>
              <div className="button__delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{totalCount}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
