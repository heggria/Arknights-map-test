/**
 * 此为攻击过程脚本文件
 * 分为四个过程：普通攻击，技能开启瞬间副作用，技能持续期间攻击敌人，技能关闭瞬间的副作用
 * props:rawData,skillOpenData,enemies/战场内存活（未隐身/可被攻击）敌人数据
 */
/**
 * 基础攻击优先级计算，根据行动路径的长度进行计算
 * return：[基础优先级（低到高），飞行物优先级（0/1），甲优先级（低到高），攻优先级（低到高）]
 */
function emenyPriority(enemies) {

    return enemies
}
/**
 * 攻击范围内敌人计算
 */
function emenyInRange(enemies, range) {
    
    return enemies
}
/**
 * 可以进行攻击的敌人计算
 */
function emenyShouldAtk(enemies, atkNum) {
    
    return enemies
}

/*
    小羊二技能开启关闭状态切换
 */
function amgoat_skill_2_attack(rawData,enemies) {
    rawData.atk += rawData.atk * rawData.skill.atkAdd;
    rawData.atkInterval = 0.5;
    rawData.atkNum = rawData.skill.atkNum;
    rawData.range = rawData.skill.range;
    return rawData;
}
/*
    小羊三技能开启关闭状态切换
 */
function amgoat_skill_3_open(rawData) {
    rawData.atk += rawData.atk * rawData.skill.atkAdd;
    rawData.atkInterval = 0.5;
    rawData.atkNum = rawData.skill.atkNum;
    rawData.range = rawData.skill.range;
    return rawData;
}
function amgoat_skill_3_attack(skillOpenData,enemies) {
    skillOpenData.atk;
    rawData.atkInterval = 0.5;
    rawData.atkNum = rawData.skill.atkNum;
    rawData.range = rawData.skill.range;
    return rawData;
}
function amgoat_skill_3_close(rawData) {
    return rawData;
}
