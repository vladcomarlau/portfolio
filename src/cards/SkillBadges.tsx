
export function SkillBadges(props: any) {

    return (
        <div className="p-1">
            {props.skills.map((skill: string) => (
                <span className="badge badge-sm badge bg-custom-primary border-none font-serif mx-1">{skill}</span>
            ))}
        </div>
    );
}
