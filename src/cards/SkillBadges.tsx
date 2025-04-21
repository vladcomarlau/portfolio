
export function SkillBadges(props: any) {

    return (
        <div className="p-1">
            {props.skills.map((skill: string) => (
                <span className="badge badge-sm badge bg-custom-primary text-custom-secondary border-none font-bold mx-1">{skill}</span>
            ))}
        </div>
    );
}
