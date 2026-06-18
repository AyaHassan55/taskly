import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Cookies from "js-cookie";
import getProjectMembers from "../../services/get-members.service";
import type { ProjectMember } from "../../types/project-members";
import { getAvatarLetters } from "../../utils/get-avatar-letter";
import getProjectById from "../../services/projects/get-project-by-id.service";
import toast from "react-hot-toast";
import MoreActionIcon from "../../assets/icons/moreActionIcon.svg?react"
import AddMember from "../../assets/icons/add-member.svg?react"
import ProjectPageHeader from "../../components/ui/proiectPageHeader";

import MemberSkelton from "../../components/ui/project Members/MemberSkeleton";

import ErrorMember from "../../components/ui/project Members/ErrorMember";

interface IProps {



}

const ProjectMembers = ({ }: IProps) => {
  const { projectId } = useParams();

  const [members, setMembers] = useState<ProjectMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [projectName, setProjectName] = useState("");
  // role styles
  const roleStyles = {
    owner: "bg-[#0052CC] text-[white] ",
    admin: "bg-[#CDDDFF] text-[#51617E]",
    member: "bg-[#D7E2FF] text-[#434654]",
    viewer: "bg-[#E8EDFF] text-[#434654]",
  };
  const cellAddress = "py-5 px-8 text-[#434654] text-[11px] font-bold leading-[100%] tracking-[1.1px] uppercase"
  // get members
  useEffect(() => {
    const fetchMembers = async () => {
      const token = Cookies.get("access_token");
      if (!token || !projectId) return;

      try {
        setLoading(true);
        const data = await getProjectMembers(token, projectId);
        setMembers(data)

      } catch (err: any) {
        setError("Failed to load project members. Please try again.")

      } finally {
        setLoading(false)
      }

    }
    fetchMembers()
  }, [projectId])
  //  get project by id
  useEffect(() => {
    const fetchProject = async () => {
      const token = Cookies.get("access_token");

      if (!token || !projectId) return;

      try {
        const project = await getProjectById(token, projectId);
        setProjectName(project.name)



      } catch {
        toast.error("Failed to load project");
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return(
 
   <MemberSkelton/>
  
   
    );
  
  }
  if (error) {
    return <ErrorMember/>
  }
  return (
    <div>
      {/* breadcrumbs */}
      {/* creadcrumps and header  */}
      <ProjectPageHeader
        projectName={projectName}
        pageTitle="Project Members"
        currentPage="Members"
      />

      {/* table */}
      <div className="hidden sm:block mt-16 mx-auto w-3xl border border-[#E6EAF2] shadow-[0px_1px_2px_0px_#0000000D]  bg-white rounded-lg overflow-hidden ">

        <table className="w-full">
          <thead className=" bg-[#e0fff84d]">
            <tr className="">
              <th className={`text-left ${cellAddress}`}>Member</th>
              <th className={`text-left  ${cellAddress}`}>Role</th>
              <th className={`text-right ${cellAddress}`}>Actions</th>
            </tr>
          </thead>
          <tbody className="mx-auto pl-8 gap-8">
            {members.map((member: ProjectMember) => (
              <tr
                key={member.member_id}
                className=""
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-xs font-semibold text-blue-700">
                        {getAvatarLetters(member.metadata.name)}

                      </span>
                    </div>

                    <div>
                      <p className="font-medium">
                        {member.metadata.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {member.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-xl  font-bold text-[10px] leading-[100%] tracking-[0.5px] ${roleStyles[
                      member.role.toLowerCase() as keyof typeof roleStyles
                      ]
                      }`}
                  >
                    {member.role.toUpperCase()}
                  </span>
                </td>

                 <td className="py-4 px-6">
                    <div className="flex justify-end">
                      {member.role !== 'owner' && (
                        <button
                          className="p-2 hover:bg-surface-low rounded transition-colors"
                          aria-label="Member actions"
                        >
                          <MoreActionIcon className="w-5 h-5 text-slate-medium" />
                        </button>
                      )}
                    </div>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* mobile table */}

 <div className="sm:hidden space-y-4">
        {members.map(member => {
          
          return (
            <div>
              <h1 className="mt-5 text-[29px] font-semibold text-[#041B3C] leading-10 tracking-[-0.9px] text-center">
                   Project Member
              </h1>
            <div
              key={`${member.member_id}`}
              className="bg-white rounded-md p-4 m-3 flex items-center gap-3 overflow-hidden "
            >
               
              <div className="flex items-center gap-3 min-w-0 flex-1 overflow-hidden">
                <div className="w-10 h-10 mr-3 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-xs font-semibold text-blue-700">
                        {getAvatarLetters(member.metadata.name)}

                      </span>
                    </div>

                <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                  <p className="text-body-md font-semibold text-slate-dark truncate">
                    {member.metadata.name}
                  </p>
                  <p className="text-body-sm text-slate-medium truncate">
                    {member.email}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-sm shrink-0">
                     <span
                    className={`px-3 py-2 rounded-lg  font-bold text-[10px] leading-[100%] tracking-[0.5px] ${roleStyles[
                      member.role.toLowerCase() as keyof typeof roleStyles
                      ]
                      }`}
                  >
                    {member.role.toUpperCase()}
                  </span>
                </div>
                
                {member.role !== 'owener' && (
                  <button
                    className="p-1 hover:bg-surface-low rounded transition-colors"
                    aria-label="Member actions"
                  >
                    <MoreActionIcon className="w-5 h-5 text-slate-medium" />
                  </button>
                )}
              </div>
            </div>
            </div>
          );
        })}
      </div>

      
      
       {/* floating action button */}
            <button 
            // onClick={() => navigate(ROUTES.ADD_PROJECT)}
              className="mt-50 fixed md:hidden bottom-18 right-6 w-14 h-14 bg-linear-to-br from-[#003D9B] to-[#0052CC] text-white text-[24px]
                      rounded-xl shadow-lg  hover:scale-110 transition-all flex items-center justify-center z-50"
            ><AddMember className="w-6 h-6" />

            </button>
    </div>
  );
}

export default ProjectMembers