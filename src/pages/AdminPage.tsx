// import { useState } from "react";
// import { motion } from "framer-motion";
// // import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// const AdminPage = () => {
//   const adminTabs = [
//     { id: "messages", label: "Wiadomości" },
//     { id: "cars", label: "Samochody" },
//     { id: "categories", label: "Kategorie" },
//     { id: "test-drives", label: "Jazdy próbne" },
//   ] as const;

//   const [activeTab, setActiveTab] =
//     useState<(typeof adminTabs)[number]["id"]>("messages");

//   const [showCarModal, setShowCarModal] = useState(false);
//   const [editingCar, setEditingCar] = useState<any>(null);

//   return (
//     <div
//       className="admin-page "
//       style={{ minHeight: "100vh", paddingTop: "80px" }}
//     >
//       <div className="container py-5">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div
//             className="d-flex justify-content-between align-items-center mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h1 className="display-5 fw-bold">Admin Panel</h1>
//           </motion.div>

//           {/* Tabs */}
//           <motion.ul
//             className="nav nav-tabs mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             {adminTabs.map((tab, index) => (
//               <motion.li
//                 key={tab.id}
//                 className="nav-item"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
//               >
//                 <button
//                   className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
//                   onClick={() => setActiveTab(tab.id)}
//                 >
//                   {tab.label}
//                 </button>
//               </motion.li>
//             ))}
//           </motion.ul>

//           {/* Car Modal */}
//           {showCarModal && (
//             <div
//               className="modal show d-block"
//               style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//               onClick={() => setShowCarModal(false)}
//             >
//               <div
//                 className="modal-dialog modal-lg modal-dialog-centered"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <motion.div
//                   className="modal-content"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <div className="modal-header">
//                     <h5 className="modal-title">
//                       {editingCar ? "Edytuj samochód" : "Dodaj nowy samochód"}
//                     </h5>
//                     <button
//                       type="button"
//                       className="btn-close"
//                       onClick={() => setShowCarModal(false)}
//                     ></button>
//                   </div>
//                   <div className="modal-body">
//                     <form>
//                       <div className="row mb-3">
//                         <div className="col-md-6">
//                           <label className="form-label">ID samochodu</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="np. rr-phantom"
//                           />
//                         </div>
//                         <div className="col-md-6">
//                           <label className="form-label">Nazwa</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Rolls-Royce Phantom"
//                           />
//                         </div>
//                       </div>

//                       <div className="row mb-3">
//                         <div className="col-md-6">
//                           <label className="form-label">Podtytuł</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Szczyt luksusu"
//                           />
//                         </div>
//                         <div className="col-md-6">
//                           <label className="form-label">Kategoria</label>
//                           <select className="form-select">
//                             <option value="1">Luxury</option>
//                             <option value="2">Sport</option>
//                             <option value="3">City</option>
//                           </select>
//                         </div>
//                       </div>

//                       <div className="mb-3">
//                         <label className="form-label">Opis</label>
//                         <textarea
//                           className="form-control"
//                           rows={3}
//                           placeholder="Szczegółowy opis samochodu..."
//                         ></textarea>
//                       </div>

//                       <div className="mb-3">
//                         <label className="form-label">URL zdjęcia</label>
//                         <input
//                           type="url"
//                           className="form-control"
//                           placeholder="https://..."
//                         />
//                       </div>

//                       <div className="row mb-3">
//                         <div className="col-md-4">
//                           <label className="form-label">Cena (€)</label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             placeholder="450000"
//                           />
//                         </div>
//                         <div className="col-md-4">
//                           <label className="form-label">Silnik</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="6.75L V12"
//                           />
//                         </div>
//                         <div className="col-md-4">
//                           <label className="form-label">Moc (HP)</label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             placeholder="563"
//                           />
//                         </div>
//                       </div>

//                       <div className="row mb-3">
//                         <div className="col-md-4">
//                           <label className="form-label">
//                             Moment obrotowy (Nm)
//                           </label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             placeholder="900"
//                           />
//                         </div>
//                         <div className="col-md-4">
//                           <label className="form-label">0-100 km/h (s)</label>
//                           <input
//                             type="number"
//                             step="0.1"
//                             className="form-control"
//                             placeholder="5.3"
//                           />
//                         </div>
//                         <div className="col-md-4">
//                           <label className="form-label">
//                             Prędkość max (km/h)
//                           </label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             placeholder="250"
//                           />
//                         </div>
//                       </div>

//                       <div className="row mb-3">
//                         <div className="col-md-6">
//                           <label className="form-label">Skrzynia biegów</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="8-speed automatic"
//                           />
//                         </div>
//                         <div className="col-md-6">
//                           <label className="form-label">Napęd</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="RWD / AWD / FWD"
//                           />
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                   <div className="modal-footer">
//                     <button
//                       type="button"
//                       className="btn btn-secondary"
//                       onClick={() => setShowCarModal(false)}
//                     >
//                       Anuluj
//                     </button>
//                     <button type="button" className="btn btn-primary">
//                       {editingCar ? "Zapisz zmiany" : "Dodaj samochód"}
//                     </button>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;
