const DashboardCard = ({ type }:any) => {
  const Card1 = () => (
    <div className="p-3">
    <div>
      <header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs font-semibold p-2">Today</header>
      <ul className="my-1">
     
        <li className="flex px-2">
       
          <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
            <div className="grow flex justify-between">
              <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Nick Mark</a> mentioned <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Sara Smith</a> in a new post</div>
              
            </div>
          </div>
        </li>
       
        <li className="flex px-2">
         
          <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
            <div className="grow flex justify-between">
              <div className="self-center">The post <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Post Name</a> was removed by <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Nick Mark</a></div>
              
            </div>
          </div>
        </li>
     
        <li className="flex px-2">
        
          <div className="grow flex items-center text-sm py-2">
            <div className="grow flex justify-between">
              <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Patrick Sullivan</a> published a new <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">post</a></div>
            
            </div>
          </div>
        </li>
      </ul>
    </div>
  
    <div>
      <header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs font-semibold p-2">Yesterday</header>
      <ul className="my-1">
      
        <li className="flex px-2">
       
          <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
            <div className="grow flex justify-between">
              <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">240+</a> users have subscribed to <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Newsletter #1</a></div>
              
            </div>
          </div>
        </li>
       
        <li className="flex px-2">
         
          <div className="grow flex items-center text-sm py-2">
            <div className="grow flex justify-between">
              <div className="self-center">The post <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Post Name</a> was suspended by <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Nick Mark</a></div>
             
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
  );

  const Card2 = () => (
    <div className="p-3">
        <div>
          <header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs font-semibold p-2">Today</header>
          <ul className="my-1">
          <li className="flex px-2">
           
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Qonto</a> billing</div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-gray-800 dark:text-gray-100">-$67.35</span>
                  </div>
                </div>
              </div>
            </li>
          
            <li className="flex px-2">
            
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Cruip.com</a> Market Ltd 70 Wilson St London</div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-green-600">+342.56</span>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="flex px-2">
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Notion Labs Inc</a></div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-green-600">+78.56</span>
                  </div>
                </div>
              </div>
            </li>
           
            <li className="flex px-2">
           
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Market Cap Ltd</a></div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-green-600">+2,452.87</span>
                  </div>
                </div>
              </div>
            </li>
           
            <li className="flex px-2">
            
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">App.com</a> Market Ltd 70 Wilson St London</div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-gray-800 dark:text-gray-100 line-through">+$76.83</span>
                  </div>
                </div>
              </div>
            </li>
           
            <li className="flex px-2">
          
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">App.com</a> Market Ltd 70 Wilson St London</div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-gray-800 dark:text-gray-100">-$65.22</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
  );

  return (
    <div>
      {type === 'activity' ? <Card1 /> : null}
      {type === 'expense' ? <Card2 /> : null}
    </div>
  );
}

export default DashboardCard;

