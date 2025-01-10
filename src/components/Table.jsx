import { useState, useEffect } from 'react';
import { Search, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Users } from 'lucide-react';

const MembersTable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [animateRows, setAnimateRows] = useState(false);
  const itemsPerPage = 10;

  // Member data from CSV (complete dataset)
  const members = [
    { memberNumber: "9775427", firstName: "Yuvraj", lastName: ".", email: "redhuyuvraj01@gmail.com" },
    { memberNumber: "6556734", firstName: "Manya", lastName: ".", email: "girdharmanya28@gmail.com" },
    { memberNumber: "5510285", firstName: "Ayushi", lastName: ".", email: "ayushimanhas12@gmail.com" },
    { memberNumber: "7736933", firstName: "Kartik", lastName: ".", email: "0912kartik@gmail.com" },
    { memberNumber: "3450703", firstName: "Tarun", lastName: ".", email: "tarunvats1807@gmail.com" },
    { memberNumber: "4248804", firstName: "Khushbu", lastName: ".", email: "CO21336@ccet.ac.in" },
    { memberNumber: "3510188", firstName: "Aishita", lastName: ".", email: "co21305@ccet.ac.in" },
    { memberNumber: "8090044", firstName: "Priyanshu", lastName: ".", email: "priyanshuhoney2002@gmail.com" },
    { memberNumber: "6458619", firstName: "Kriti", lastName: "Aggarwal", email: "kritiaggarwwal@gmail.com" },
    { memberNumber: "8953261", firstName: "Divyansh", lastName: "Aggarwal", email: "divyanshaggarwal07@gmail.com" },
    { memberNumber: "3013317", firstName: "Saksham", lastName: "Arora", email: "sakshaminfinity9@gmail.com" },
    { memberNumber: "9300002", firstName: "Premprakash", lastName: "Babu", email: "piyush02072002@gmail.com" },
    { memberNumber: "7626360", firstName: "Rishika", lastName: "Bansal", email: "co20547@ccet.ac.in" },
    { memberNumber: "2293717", firstName: "Aayushi", lastName: "Bansal", email: "aayushi1499@gmail.com" },
    { memberNumber: "0208607", firstName: "Vanshika", lastName: "Bhardwaj", email: "co21366@ccet.ac.in" },
    { memberNumber: "2488858", firstName: "Iqman", lastName: "Bhatia", email: "iqman.singh5@gmail.com" },
    { memberNumber: "8982210", firstName: "Kuldeep", lastName: "Bhogal", email: "kuldeepbhogal111@gmail.com" },
    { memberNumber: "9544070", firstName: "Ishita", lastName: "Chamola", email: "ishitachamola@gmail.com" },
    { memberNumber: "3523576", firstName: "Utkarsh", lastName: "Chauhan", email: "utkarsh.utee@gmail.com" },
    { memberNumber: "6036310", firstName: "Anureet", lastName: "Chhabra", email: "anureet0409@gmail.com" },
    { memberNumber: "0083198", firstName: "Akshit", lastName: "Chhikara", email: "akshit.ck@gmail.com" },
    { memberNumber: "2552562", firstName: "Vanshika", lastName: "Chilkoti", email: "chilkoti.vanshika@gmail.com" },
    { memberNumber: "4915557", firstName: "Muskaan", lastName: "Chopra", email: "chopramuskaan712@gmail.com" },
    { memberNumber: "9408556", firstName: "Ritika", lastName: "Dhiman", email: "co17350.ccet@gmail.com" },
    { memberNumber: "5300167", firstName: "Ritika", lastName: "Dhiman", email: "ritikadhimanritz@gmail.com" },
    { memberNumber: "0139086", firstName: "Harshit", lastName: "Dubey", email: "dubeyharshit746@gmail.com" },
    { memberNumber: "7643618", firstName: "Japan", lastName: "Gandhi", email: "japanajitsingh27@gmail.com" },
    { memberNumber: "1814783", firstName: "Sahil", lastName: "Garg", email: "me.sahil.gg@gmail.com" },
    { memberNumber: "2778661", firstName: "Neha", lastName: "Garg", email: "nehagarg0901@gmail.com" },
    { memberNumber: "3479752", firstName: "Shreya", lastName: "Garg", email: "shreya25garg@gmail.com" },
    { memberNumber: "9247666", firstName: "Sonam", lastName: "Garg", email: "co18350.ccet@gmail.com" },
    { memberNumber: "6666238", firstName: "Rishika", lastName: "Gaur", email: "gaurrishika156@gmail.com" },
    { memberNumber: "6554196", firstName: "Deepika", lastName: "Goyal", email: "mco22385@ccet.ac.in" },
    { memberNumber: "3713622", firstName: "Shivam", lastName: "Goyal", email: "shivam.goyalzx@gmail.com" },
    { memberNumber: "1130226", firstName: "Kunwardeep", lastName: "Gujral", email: "kunwardeepgujral000@gmail.com" },
    { memberNumber: "7883078", firstName: "Aashi", lastName: "Gupta", email: "aashigupta0101@gmail.com" },
    { memberNumber: "9423925", firstName: "Anshul", lastName: "Gupta", email: "anshulphy.india@gmail.com" },
    { memberNumber: "3380642", firstName: "Devashish", lastName: "Gupta", email: "devashishgupta9822@gmail.com" },
    { memberNumber: "9838169", firstName: "Ritika", lastName: "Gupta", email: "co21350@ccet.ac.in" },
    { memberNumber: "9759656", firstName: "Hardik", lastName: "Gupta", email: "co21534@ccet.ac.in" },
    { memberNumber: "7824189", firstName: "Tushar", lastName: "Guta", email: "tusharguta7584@gmail.com" },
    { memberNumber: "5941074", firstName: "Simran", lastName: "Jaggi", email: "simranjaggi2004@gmail.com" },
    { memberNumber: "8428291", firstName: "Navjot", lastName: "Jangra", email: "imnavjotjangra@gmail.com" },
    { memberNumber: "4617442", firstName: "Jagteshvar", lastName: "Jot Singh", email: "gurvinder.singhgp660@gmail.com" },
    { memberNumber: "9631249", firstName: "Gurkanwal", lastName: "Kang", email: "71gukal@gmail.com" },
    { memberNumber: "2614730", firstName: "Karan", lastName: "Karan", email: "karan2301@outlook.com" },
    { memberNumber: "1755100", firstName: "Krish", lastName: "Kathuria", email: "krishkathuria1622@gmail.com" },
    { memberNumber: "3520064", firstName: "Parnit", lastName: "Kaur", email: "parnitkaur.pk@gmail.com" },
    { memberNumber: "7994356", firstName: "Ishleen", lastName: "Kaur", email: "kaurishleen125@gmail.com" },
    { memberNumber: "8026089", firstName: "Harkiran", lastName: "Kaur", email: "harkiranbhatia@gmail.com" },
    { memberNumber: "6672110", firstName: "Avneet", lastName: "Kaur", email: "mailforavneet@gmail.com" },
    { memberNumber: "7745084", firstName: "Pushkar", lastName: "Kaushik", email: "pushkarkaushik4440@gmail.com" },
    { memberNumber: "5754495", firstName: "Siddharth", lastName: "Khati", email: "siddharth.khati03@gmail.com" },
    { memberNumber: "3980446", firstName: "Tanveer", lastName: "Kochhar", email: "tanveer71620@gmail.com" },
    { memberNumber: "1267253", firstName: "Yashasvi", lastName: "Koul", email: "y.koul16@gmail.com" },
    { memberNumber: "0002083", firstName: "Sudhakar", lastName: "Kumar", email: "sudhakar@ccet.ac.in" },
    { memberNumber: "2391260", firstName: "Rajneesh", lastName: "Kumar", email: "nitinkumar97941@gmail.com" },
    { memberNumber: "9928955", firstName: "Uday", lastName: "Kumar", email: "udaykumarjangra@yahoo.in" },
    { memberNumber: "8840649", firstName: "Lalit", lastName: "Kumar", email: "lakshyabijarnia@gmail.com" },
    { memberNumber: "0421387", firstName: "Shivam", lastName: "Kumar", email: "shivam.sk3002@gmail.com" },
    { memberNumber: "6512349", firstName: "Tejas", lastName: "Kumar", email: "tejaskm001@gmail.com" },
    { memberNumber: "5872118", firstName: "Rima", lastName: "Kumari", email: "rima.simi2004@gmail.com" },
    { memberNumber: "4168679", firstName: "Manisha", lastName: "Kumari", email: "manishakumari02feb@gmail.com" },
    { memberNumber: "6461866", firstName: "Uday", lastName: "Madan", email: "udaymadan24@gmail.com" },
    { memberNumber: "8788594", firstName: "Deepak", lastName: "Mahto", email: "deepak1202mah@gmail.com" },
    { memberNumber: "3324228", firstName: "Ishika", lastName: "Malhotra", email: "ishikaa09999@gmail.com" },
    { memberNumber: "0667278", firstName: "Divyansh", lastName: "Manro", email: "divyanshmanro4@gmail.com" },
    { memberNumber: "7035734", firstName: "Gopal", lastName: "Mengi", email: "gopalmengi@gmail.com" },
    { memberNumber: "1456133", firstName: "Kanishk", lastName: "Nagpal", email: "kaynagpal03@gmail.com" },
    { memberNumber: "4741918", firstName: "Aamya", lastName: "Nagpal", email: "aamyanagpal28@gmail.com" },
    { memberNumber: "8183263", firstName: "Shreya", lastName: "Pandey", email: "shreya20011002@gmail.com" },
    { memberNumber: "3403746", firstName: "Mehak", lastName: "Preet", email: "mehak18p@gmail.com" },
    { memberNumber: "2382188", firstName: "Dikshant", lastName: "Rajput", email: "rajputdikshant4@gmail.com" },
    { memberNumber: "1552877", firstName: "Yash", lastName: "Roushan", email: "yashkr425@gmail.com" },
    { memberNumber: "3582017", firstName: "Himanshu", lastName: "Saha", email: "himanshusaha02@gmail.com" },
    { memberNumber: "9704218", firstName: "Mukesh", lastName: "Sahani", email: "mkshsahani852@gmail.com" },
    { memberNumber: "1612547", firstName: "Mukesh", lastName: "Sahani", email: "msco18333@gmail.com" },
    { memberNumber: "5667485", firstName: "Taruna", lastName: "Saini", email: "sainitaruna0@gmail.com" },
    { memberNumber: "1051419", firstName: "Saket", lastName: "Sarin", email: "sarinsaket@gmail.com" },
    { memberNumber: "6029307", firstName: "Himanshu", lastName: "Setia", email: "himanshusetia17@gmail.com" },
    { memberNumber: "5280202", firstName: "Janvi", lastName: "Sharma", email: "janvijawas2005@rediffmail.com" },
    { memberNumber: "9660368", firstName: "Samarth", lastName: "Sharma", email: "ssamarth6113@gmail.com" },
    { memberNumber: "5972984", firstName: "Akash", lastName: "Sharma", email: "sharmaaakash080@gmail.com" },
    { memberNumber: "1809875", firstName: "Shuchika", lastName: "Sharma", email: "shuchikasharma2000@gmail.com" },
    { memberNumber: "6841960", firstName: "Vanshika", lastName: "Sharma", email: "vanshikasharma1405@gmail.com" },
    { memberNumber: "9114704", firstName: "Sidharth", lastName: "Sharma", email: "sharmasidharth2001@gmail.com" },
    { memberNumber: "4058070", firstName: "Vivek", lastName: "Sharma", email: "viveksharma9th@gmail.com" },
    { memberNumber: "6712363", firstName: "Soumya", lastName: "Sharma", email: "co20359@ccet.ac.in" },
    { memberNumber: "4216779", firstName: "Anamika", lastName: "Sharma", email: "co20306@ccet.ac.in" },
    { memberNumber: "0460181", firstName: "Nandini", lastName: "Sidana", email: "nandinisidana11@gmail.com" },
    { memberNumber: "5818559", firstName: "Sunil", lastName: "Singh", email: "sksingh@ccet.ac.in" },
    { memberNumber: "5806900", firstName: "Nipun", lastName: "Singh", email: "nipuns2112@gmail.com" },
    { memberNumber: "4534562", firstName: "Samar", lastName: "Singh", email: "co22361@ccet.ac.in" },
    { memberNumber: "5672788", firstName: "Jasjeet", lastName: "Singh", email: "jasjeetsinghsajjan@gmail.com" },
    { memberNumber: "5518932", firstName: "Jaiveer", lastName: "Singh", email: "singh.jaiveer.768@gmail.com" },
    { memberNumber: "5841847", firstName: "Paritosh", lastName: "Singh", email: "paritoshsingh908@gmail.com" },
    { memberNumber: "0298643", firstName: "Tushar", lastName: "Singh", email: "tushar23123@gmail.com" },
    { memberNumber: "9517960", firstName: "Deepinder", lastName: "Singh", email: "co18319.ccet@gmail.com" },
    { memberNumber: "2692699", firstName: "Maninder", lastName: "Singh", email: "maninders2282@gmail.com" },
    { memberNumber: "1758243", firstName: "Ganga", lastName: "Singh", email: "gangasingh1807@gmail.com" },
    { memberNumber: "0939642", firstName: "Rashandeep", lastName: "Singh", email: "rashandeepsingh@gmail.com" },
    { memberNumber: "1062472", firstName: "Inderpreet", lastName: "Singh", email: "inderpreet221099@gmail.com" },
    { memberNumber: "8216656", firstName: "Manraj", lastName: "Singh", email: "manrajsingh16447@gmail.com" },
    { memberNumber: "9606265", firstName: "Vanshika", lastName: "Singla", email: "vanshikasingla826@gmail.com" },
    { memberNumber: "0999025", firstName: "Dipesh", lastName: "Singla", email: "dipeshsingla668@gmail.com" },
    { memberNumber: "9403446", firstName: "Briti", lastName: "Singla", email: "britisingla@gmail.com" },
    { memberNumber: "8090105", firstName: "Ajay", lastName: "Sohal", email: "ajaesohal@gmail.com" },
    { memberNumber: "6829516", firstName: "Taranjeet", lastName: "Soni", email: "tj3333xyz@gmail.com" },
    { memberNumber: "3582326", firstName: "Ashutosh", lastName: "Thakur", email: "co19209@ccet.ac.in" },
    { memberNumber: "2251526", firstName: "Ruchika", lastName: "Thakur", email: "truchika2022@gmail.com" },
    { memberNumber: "7298131", firstName: "Harshit", lastName: "Vashisht", email: "harshitvashisht07@gmail.com" },
    { memberNumber: "3412101", firstName: "Rinka", lastName: "Yadav", email: "rinkayadav66@gmail.com" }
  ]


  useEffect(() => {
    setAnimateRows(true);
    const timer = setTimeout(() => setAnimateRows(false), 500);
    return () => clearTimeout(timer);
  }, [currentPage, sortConfig, searchQuery]);

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setAnimateRows(true);
  };

  const filteredData = members.filter(member => 
    member.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.memberNumber.includes(searchQuery) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];
    return sortConfig.direction === 'asc' ? 
      aValue.localeCompare(bValue) : 
      bValue.localeCompare(aValue);
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pageNumbers = [];
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-8 bg-transparent mt-[100px] from-gray-900/95 to-gray-800/95 rounded-2xl backdrop-blur-xl shadow-2xl">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Users size={24} className="text-blue-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Members Directory
            </h2>
          </div>
          <div className="text-sm text-gray-400 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
            Total Members: {sortedData.length}
          </div>
        </div>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors group-hover:text-blue-400" size={20} />
          <input
            type="text"
            placeholder="Search members by name, number, or email..."
            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-100 transition-all duration-300 placeholder-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-xl border border-gray-700/50 shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800/80 border-b border-gray-700">
                {['memberNumber', 'firstName', 'lastName', 'email'].map((key) => (
                  <th
                    key={key}
                    onClick={() => sortData(key)}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider cursor-pointer group"
                  >
                    <div className="flex items-center space-x-2 transition-colors hover:text-blue-400">
                      <span>{key === 'memberNumber' ? 'Member ID' : 
                            key === 'firstName' ? 'First Name' : 
                            key === 'lastName' ? 'Last Name' : 'Email'}</span>
                      <div className="transform transition-transform duration-200">
                        {sortConfig.key === key ? (
                          sortConfig.direction === 'asc' ? 
                            <ChevronUp size={16} /> : 
                            <ChevronDown size={16} />
                        ) : (
                          <ChevronUp size={16} className="opacity-0 group-hover:opacity-50" />
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {paginatedData.map((member, index) => (
                <tr
                  key={member.memberNumber}
                  className={`transform transition-all duration-300 hover:bg-blue-500/5 
                    ${animateRows ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'}
                    ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-transparent'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4 text-sm text-gray-300 font-mono">
                    {member.memberNumber}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {member.firstName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {member.lastName}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      {member.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
        <div className="text-sm text-gray-400">
          Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length} entries
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="flex items-center px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed text-gray-300 transition-all duration-200 space-x-1"
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>
          
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 
                ${currentPage === number 
                  ? 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600' 
                  : 'border-gray-700 text-gray-300 hover:bg-gray-700/50'}`}
            >
              {number}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed text-gray-300 transition-all duration-200 space-x-1"
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersTable;